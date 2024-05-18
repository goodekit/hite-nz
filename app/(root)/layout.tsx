import Image from 'next/image'
import { ASSET } from 'config'
import { Sidebar, MobileNav } from 'component'
import { getLoggedInUser } from 'lib/actions/user.actions'
import { redirect } from 'next/navigation'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const loggedInUser = await getLoggedInUser()

  if (!loggedInUser) redirect('/sign-in')

  return (
    <main className='flex h-screen w-full font-inter'>
      <Sidebar user={loggedInUser} />
      <div className='flex size-full flex-col'>
        <div className='root-layout'>
          <Image src={ASSET.ICON} width={30} height={30} alt='icon' />
          <div className=''>
            <MobileNav user={loggedInUser} />
          </div>
        </div>
        {children}
      </div>
    </main>
  )
}
