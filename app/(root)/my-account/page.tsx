import { HeaderBox } from 'component'
import { getLoggedInUser } from 'lib'
import { getAccounts } from 'lib/actions'

const MyAccount = async () => {
  const loggedIn = await getLoggedInUser()
  const accounts = await getAccounts({
    userId: loggedIn.$id,
  })
  return (
    <section className='flex'>
      <div className='my-account'>
        <HeaderBox title='My Accounts' subtext='Manage your account and settings' />
        <div className='space-y-4'>
          <div className='header-2'>
            <h2>Your Cards</h2>
          </div>
          <div className='flex flex-wrap gap-6'></div>
        </div>
      </div>
    </section>
  )
}

export default MyAccount
