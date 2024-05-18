'use client'

import { useState, Fragment } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { z } from 'zod'
import { schema } from 'lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button, FormInput } from 'component'
import { Form } from 'component/form/form'
import { ASSET } from 'config'
import { KEY, PLACEHOLDER, LABEL } from 'constant'
import { Loader2 } from 'lucide-react'

const { EMAIL, PASSWORD, SUBMIT, SIGN_IN, SIGN_UP, FIRST_NAME, LAST_NAME, DATE_OF_BIRTH, SSN } = LABEL.FORM
const { ADDRESS } = LABEL
const { FORM, ADDRESS: PL_ADDRESS } = PLACEHOLDER

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const authSchema = schema(type)

  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
    },
  })

  async function onSubmit(data: z.infer<typeof authSchema>) {
    setIsLoading(true)
    try {
      if (type === KEY.SIGN_UP) {
        // const newUser = new SignUp(data)
        // setUser(newUser)
      } else if (type === KEY.SIGN_IN) {
        // const response = await SignIn({
        //   email: data.email,
        //   password: data.password,
        // })
        // if (response) {
        //   router.push('/')
        // }
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <section className='auth-form'>
      <header className='flex flex-col gap-5 md:gap-8'>
        <Link href='/' className='cursor-pointer flex items-center gap-1 px-4'>
          <Image src={ASSET.ICON} width={34} height={34} alt='logo' />
          <h1 className='text-24 font-bold text-gray-900'>hite</h1>
        </Link>
        <div className='flex flex-col gap-1 md:gap-3'>
          <h1 className='text-25 lg:text-36 font-semibold text-gray-900'>
            {user ? 'Link Account' : type === 'sign-in' ? 'Sign-In' : 'Sign-up'}
            <p className='text-16 font-normal text-gray-600'>{user ? 'Link your account to get started' : 'Please enter your details'}</p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className='flex flex-col gap-4'></div>
      ) : (
        <Fragment>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              {type === KEY.SIGN_UP && (
                <Fragment>
                  <div className='flex gap-4 justify-center'>
                    <FormInput control={form.control} label={LAST_NAME} name={KEY.LAST_NAME} placeholder={FORM.LAST_NAME} />
                    <FormInput control={form.control} label={FIRST_NAME} name={KEY.FIRST_NAME} placeholder={FORM.FIRST_NAME} />
                  </div>
                  <FormInput control={form.control} label={ADDRESS.ADDRESS} name={KEY.ADDRESS} placeholder={PLACEHOLDER.ADDRESS.ADDRESS} />
                  <div className='flex gap-4 justify-center'>
                    <FormInput control={form.control} label={ADDRESS.STATE} name={KEY.STATE} placeholder={PLACEHOLDER.ADDRESS.STATE} />
                    <FormInput control={form.control} label={ADDRESS.POSTAL_CODE} name={KEY.POSTAL_CODE} placeholder={PL_ADDRESS.POSTAL_CODE} />
                  </div>

                  <div className='flex gap-4 justify-center'>
                    <FormInput control={form.control} label={DATE_OF_BIRTH} name={KEY.DATE_OF_BIRTH} placeholder={FORM.DATE_OF_BIRTH} />
                    <FormInput control={form.control} label={SSN} name={KEY.SSN} placeholder={FORM.SSN} />
                  </div>
                </Fragment>
              )}
              <FormInput control={form.control} label={EMAIL} name={KEY.EMAIL} placeholder={FORM.EMAIL} />
              <FormInput control={form.control} label={PASSWORD} name={KEY.PASSWORD} placeholder={FORM.PASSWORD} type={KEY.PASSWORD} />
              <div className='flex flex-col gap-4'>
                <Button type={KEY.SUBMIT} className='form-btn' disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 size={20} className='animate-spin snap-center' />
                  ) : (
                    <Fragment>{type === KEY.SIGN_IN ? SIGN_IN : SIGN_UP}</Fragment>
                  )}
                </Button>
              </div>
            </form>
          </Form>

          <footer>
            <p className='text-16 font-normal text-gray-600'>
              {type === KEY.SIGN_IN ? 'New to hite?' : 'Already have an account?'} &nbsp;
              <Link href={type === KEY.SIGN_IN ? '/sign-up' : '/sign-in'} className='text-blue-600 cursor-pointer'>
                {type === KEY.SIGN_IN ? 'Sign-up' : 'Sign-in'}
              </Link>
            </p>
          </footer>
        </Fragment>
      )}
    </section>
  )
}

export default AuthForm
