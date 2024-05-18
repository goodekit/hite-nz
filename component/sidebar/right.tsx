import { ASSET } from 'config'
import Link from 'next/link'
import Image from 'next/image'
import { BankCard } from 'component/bank-card'

const RightSidebar = ({ user, bank, transaction }: RightSidebarProps) => {
  return (
    <aside className='right-sidebar'>
      <section className='flex flex-col pb-8'>
        <div className='profile-banner' />
        <div className='profile'>
          <div className='profile-img'>
            <span className='text-5xl font-bold text-cyan-500'>{user.name[0]}</span>
          </div>
          <div className='profile-details'>
            <h1 className='profile-name'>{user.name}</h1>
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
            <div className='absolute right-0 top-8 z-0 w-[90%]'>
              <BankCard key={2} account={bank[1]} username={`${user.name}`} />
            </div>

            {bank[1] && (
              <div className='absolute right-0 top-8 z-0 w-[90%]'>
                <BankCard key={0} account={bank[0]} username={`${user.name}`} />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  )
}

export default RightSidebar
