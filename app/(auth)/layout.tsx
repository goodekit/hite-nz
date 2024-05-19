import Image from 'next/image'
import { ASSET } from 'config'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='flex min-h-screen w-full justify-between font-inter'>
      {children}{' '}
      <div className='auth-asset'>
        <div>
          <Image src={ASSET.AUTH_IMAGE} alt='auth-image' fill className='object-cover h-full' />
        </div>
      </div>
    </main>
  )
}
