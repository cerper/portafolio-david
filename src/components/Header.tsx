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
        <header className=" fixed  top-0 z-50 h-[130px]  bg-white transition-all lg:h-[122px]">
          <div className=" container flex flex-col mx-auto lg:items-center justify-center lg:justify-between lg:flex-row  ">
            <Link
              href="/"
              className="flex items-center justify-center lg:justify-between"
            >
              <Image
                src={logo}
                alt="logo"
                width={120}
                height={70}
                className="mt-0 h-[90px] lg:h-[120px] lg:mt-0"
              />
            </Link>

            <MobileNav containerStyles="capitalize  items-center justify-center text-black mt-3 flex font-bold gap-4 md:text-xl lg:hidden" />
            <Navbar containerStyles="capitalize flex gap-4 hidden font-bold text-black lg:flex" />
          </div>
        </header>
      )}
    </div>
  )
}

export default Header
