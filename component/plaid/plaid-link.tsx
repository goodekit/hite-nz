'use client'

import { Fragment, useCallback, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link'
import { createLinkToken, exchangePublicToken } from 'lib/actions/user.actions'
import { Button } from 'component'
import { ASSET } from 'config'

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
        <Button onClick={() => open()} variant='ghost' className='plaidlink-ghost'>
          <p className='hiddenl font-semibold text-black-2 xl:block'> Connect Bank </p>
        </Button>
      ) : (
        <Button onClick={() => open()} className='plaidlink-default'>
          <Image src={ASSET.CONNECT_BANK} alt='connect-bank icon' width={24} height={24} />
          <p className='text-[16px] font-semibold text-black-2'> Connect Bank </p>
        </Button>
      )}
    </Fragment>
  )
}

export default PlaidLink
