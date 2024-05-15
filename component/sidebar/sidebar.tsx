'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { navLink } from 'config'
import { cn } from 'lib/utils'

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname()

  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Link href='/' className='mb-12 flex cursor-pointer items-center gap-2'>
          <Image src='/asset/brand/hitenz.svg' alt='logo' width={100} height={100} className='size-[50px] max-xl:size-50' />
          <h1 className='sidebar-logo'>hite</h1>
        </Link>
        {navLink?.map((link) => {
          const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`)
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn('sidebar-link', {
                'bg-bank-gradient': isActive,
              })}
            >
              <div className='relative size-6'>
                <Image
                  src={link.imgUrl}
                  alt={link.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive,
                  })}
                />
              </div>
              <p
                className={cn('sidebar-label', {
                  '!text-white': isActive,
                })}
              >
                {link.label}
              </p>
            </Link>
          )
        })}
        USER
      </nav>
      FOOTER
    </section>
  )
}

export default Sidebar
