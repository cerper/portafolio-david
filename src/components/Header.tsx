'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/proyecto-david/logo-david.jpg'
import { disableNavWithFooter } from '@/lib/disableNavWithFooter'
import { usePathname } from 'next/navigation'
import MobileNav from './MobileNav'
import Navbar from './NavBar'

const Header = () => {
  const path = usePathname()
  return (
    <div>
      {!disableNavWithFooter.includes(path) && (
        <header className=" fixed  top-0 z-50 h-[130px] w-full max-w-[1920px] bg-purple-50 transition-all lg:h-[122px]">
          <div className=" flex flex-col mx-auto items-center justify-center lg:justify-between lg:flex-row  ">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width={120}
                height={70}
                className="mt-0 h-[90px] lg:h-[120px] lg:mt-0"
              />
            </Link>

            <MobileNav containerStyles="capitalize text-black mt-3 flex font-bold gap-4 md:text-xl lg:hidden" />
            <Navbar containerStyles="capitalize flex gap-4 hidden font-bold text-black lg:flex" />
          </div>
        </header>
      )}
    </div>
  )
}

export default Header
