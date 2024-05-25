import { ASSET } from 'config'
import Link from 'next/link'
import Image from 'next/image'
import { Category, BankCard } from 'component'
import { countTransactionCategories } from 'lib/utils'

const RightSidebar = ({ user, bank, transaction }: RightSidebarProps) => {
  const name = user.firstName + ' ' + user.lastName

  const categories: CategoryCount[] = countTransactionCategories(transaction)

  return (
    <aside className='right-sidebar'>
      <section className='flex flex-col pb-8'>
        <div className='profile-banner' />
        <div className='profile'>
          <div className='profile-img'>
            <span className='text-5xl font-bold text-cyan-500'>{user.firstName[0]}</span>
          </div>
          <div className='profile-details'>
            <h1 className='profile-name'>
              {user.firstName} {user.lastName}
            </h1>
            <p className='profile-email'>{user.email}</p>
          </div>
        </div>
      </section>

      <section className='banks'>
        <div className='flex w-full justify-between'>
          <h2 className='header-2'>My Banks</h2>
          <Link href='/' className='flex gap-2'>
            <Image src={ASSET.EXPAND} alt='expand-icon' width={20} height={20} />
            <h2 className='text-14 font-semibold text-gray-600'>Add Bank</h2>
          </Link>
        </div>

        {bank?.length > 0 && (
          <div className='relative flex flex-1 flex-col items-center justify-center gap-5'>
            <div className='relative z-10 w-full'>
              <BankCard key={bank[0].id} account={bank[0]} username={`${user.firstName} ${user.lastName}`} showBalance={false} />
            </div>
            {bank[1] && (
              <div className='absolute right-0 top-8 z-0 w-[90%]'>
                <BankCard key={bank[1].id} account={bank[1]} username={`${user.firstName} ${user.lastName}`} showBalance={false} />
              </div>
            )}
          </div>
        )}

        <div className='mt-10 flex flex-1 flex-col gap-6'>
          <h2 className='header-2'>Top Categories</h2>

          <div className='space-y-5'>
            {categories.map((c, index) => (
              <Category key={c.name} category={c} />
            ))}
          </div>
        </div>
      </section>
    </aside>
  )
}

export default RightSidebar
