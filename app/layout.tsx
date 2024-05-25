export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { Inter, Oxygen } from 'next/font/google'
import { GLOBAL, ASSET } from 'config'
import 'theme/css/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const oxygen = Oxygen({ subsets: ['latin'], variable: '--font-oxygen', weight: ['400', '700'] })

export const metadata: Metadata = {
  title: GLOBAL.APP_TITLE,
  description: GLOBAL.APP_DESCRIPTION,
  icons: {
    icon: ASSET.ICON,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${oxygen.variable}`}>{children}</body>
    </html>
  )
}
