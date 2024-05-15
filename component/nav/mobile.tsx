'use client'

import { Sheet, SheetContent, SheetClose, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from 'component/ui/sheet'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ASSET } from 'config'
import { navLink } from 'config'
import { cn } from 'lib/utils'

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname()

  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger>
          <Image src={ASSET.OPEN_HAMBURGER} width={30} height={30} alt='open-icon' />
        </SheetTrigger>
        <SheetContent side='left' className='border-none bg-white'>
          <Link href='/' className='flex cursor-pointer items-center gap-1 px-4'>
            <Image src='/asset/brand/hitenz.svg' alt='logo' width={50} height={50} />
            <h1 className='text-26 font-oxygen text-black-1 font-bold'>hite</h1>
          </Link>
          <div className='mobilenav-sheet'>
            <SheetClose asChild>
              <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                {navLink?.map((link) => {
                  const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`)
                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn('mobilenav-sheet_close w-full', {
                          'bg-bank-gradient': isActive,
                        })}
                      >
                        <Image
                          src={link.imgUrl}
                          alt={link.label}
                          height={20}
                          width={20}
                          className={cn({
                            'brightness-[3] invert-0': isActive,
                          })}
                        />

                        <p
                          className={cn('text-16 font-semibold text-black-2', {
                            'text-white': isActive,
                          })}
                        >
                          {link.label}
                        </p>
                      </Link>
                    </SheetClose>
                  )
                })}
              </nav>
            </SheetClose>
            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav
