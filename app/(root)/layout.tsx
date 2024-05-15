import Image from 'next/image'
import { ASSET } from 'config'
import { Sidebar, MobileNav } from 'component'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const _mockUser = {
    firstname: 'Joe',
    lastname: 'Doe',
  }
  return (
    <main className='flex h-screen w-full font-inter'>
      <Sidebar user={_mockUser} />
      <div className='flex size-full flex-col'>
        <div className='root-layout'>
          <Image src={ASSET.ICON} width={30} height={30} alt='icon' />
          <div className=''>
            <MobileNav user={_mockUser} />
          </div>
        </div>
        {children}
      </div>
    </main>
  )
}
