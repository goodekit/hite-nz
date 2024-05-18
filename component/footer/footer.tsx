'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { signOut } from 'lib/actions/user.actions'
import { KEY } from 'constant'
import { ASSET } from 'config'

const Footer = ({ user, type = KEY.DESKTOP }: FooterProps) => {
  const router = useRouter()

  const handleSignOut = async () => {
    const signedOut = await signOut()

    if (signedOut) {
      router.push('/sign-in')
    }
  }

  return (
    <footer className='footer'>
      <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
        <p className='text-xl font-bold text-gray-700'>{user.name[0]}</p>
      </div>

      <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
        <h1 className='text-16 truncate  text-gray-600'>{user.name}</h1>
        <p className='text-14 truncate font-normal text-gray-600'>{user.email}</p>
      </div>

      <div className='footer_image' onClick={handleSignOut}>
        <Image src={ASSET.SIGN_OUT} alt='expand-icon' fill />
      </div>
    </footer>
  )
}

export default Footer
