import { useEffect } from 'react'
import { BalanceBox, HeaderBox, RecentTransaction, RightSidebar } from 'component'
import { getLoggedInUser } from 'lib/actions/user.actions'
import { getAccounts, getAccount } from 'lib/actions/bank.actions'

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1
  const loggedInUser = await getLoggedInUser()
  const accounts = await getAccounts({ userId: loggedInUser.$id })

  if (!accounts) return

  const accountsData = accounts?.data
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId

  const account = await getAccount({ appwriteItemId })

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox type='greeting' title='Welcome' user={loggedInUser?.firstName || 'Guest'} subtext='this is a description' />
          <BalanceBox account={accountsData} bank={accounts?.totalBanks} totalCurrentBalance={accounts?.totalCurrentBalance} />
        </header>
        <RecentTransaction account={accountsData} transactions={account?.transactions} appwriteItemId={appwriteItemId} page={currentPage} />
      </div>
      <RightSidebar user={loggedInUser} bank={accountsData?.slice(0, 2)} transaction={account?.transactions} />
    </section>
  )
}

export default Home
