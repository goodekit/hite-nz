import { Sidebar } from 'component'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const loggedIn = {
    firstname: 'Joe',
    lastname: 'Doe',
  }
  return (
    <main className='flex h-screen w-full font-inter'>
      <Sidebar />
      {children}
    </main>
  )
}
