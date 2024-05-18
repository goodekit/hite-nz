'use server'

import { ID, Query } from 'node-appwrite'
import { createAdminClient, createSessionClient } from 'lib/server/appwrite'
import { cookies } from 'next/headers'
import { parseStringify } from 'lib/utils'

const {
  APPWRITE_DATABASE_ID: DATABASE_ID,
  APPWRITE_USER_COLLECTION_ID: USER_COLLECTION_ID,
  APPWRITE_BANK_COLLECTION_ID: BANK_COLLECTION_ID,
} = process.env

export const getUserInfo = async ({ userId }: getUserInfoProps) => {
  try {
    const { database } = await createAdminClient()

    const user = await database.listDocuments(DATABASE_ID!, USER_COLLECTION_ID!, [Query.equal('userId', [userId])])

    return parseStringify(user.documents[0])
  } catch (error) {
    console.log(error)
  }
}

export const signIn = async ({ email, password }: signInProps) => {
  try {
    const { account } = await createAdminClient()
    const session = await account.createEmailPasswordSession(email, password)

    cookies().set('appwrite-session', session.secret, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
    })

    const user = await getUserInfo({ userId: session.userId })

    return parseStringify(session)
  } catch (error) {
    console.error(error)
  }
}

export const signUp = async (userData: SignUpParams) => {
  try {
    const { email, password, firstname, lastname } = userData
    const name = `${firstname} ${lastname}`
    const { account } = await createAdminClient()

    const newUserAccount = await account.create(ID.unique(), email, password, name)
    const session = await account.createEmailPasswordSession(email, password)

    return parseStringify(newUserAccount)
  } catch (error) {}
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient()
    const user = await account.get()

    return parseStringify(user)
  } catch (error) {
    return null
  }
}

export async function signOut() {
  try {
    const { account } = await createSessionClient()

    cookies().delete('appwrite-session')

    await account.deleteSession('current')
  } catch (error) {
    return null
  }
}
