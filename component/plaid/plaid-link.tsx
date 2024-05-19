'use client'

import { Fragment, useCallback, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link'
import { createLinkToken, exchangePublicToken } from 'lib/actions/user.actions'
import { Button } from 'component'
import { StyledString } from 'next/dist/build/swc'

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const [token, setToken] = useState<string | null>(null)
  const router = useRouter()

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      await exchangePublicToken({ publicToken: public_token, user })
      router.push('/')
    },
    [user]
  )

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user)
      setToken(data?.linkToken)
    }

    getLinkToken()
  }, [user])

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  }
  const { open, ready } = usePlaidLink(config)

  return (
    <Fragment>
      {variant === 'primary' ? (
        <Button onClick={() => open()} disabled={!ready} className='plaidlink-primary'>
          Connect Bank
        </Button>
      ) : variant === 'ghost' ? (
        <Button className='plaidlink-ghost'> Connect Bank </Button>
      ) : (
        <Button> Connect Bank </Button>
      )}
    </Fragment>
  )
}

export default PlaidLink
