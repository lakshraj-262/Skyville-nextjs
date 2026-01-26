'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'

import ButtonGradient from '@/public/assets/svg/ButtonGradient'
import MenuSvg from '@/public/assets/svg/MenuSvg'

import { WhatsappHeader } from '@/public/assets'

import { navigation } from '@/constants'

import Button from './Button'
import { HamburgerMenu } from './design/Header'

import { useState } from 'react'
import { MapPin } from 'lucide-react'

const Header = () => {
  const pathname = usePathname()
  const [openNavigation, setOpenNavigation] = useState(false)

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false)
      enablePageScroll()
    } else {
      setOpenNavigation(true)
      disablePageScroll()
    }
  }

  const handleClick = () => {
    if (!openNavigation) return
    enablePageScroll()
    setOpenNavigation(false)
  }

  const openLocationInMaps = () => {
    const locationUrl = 'https://maps.google.com/?q=Skyville+Game+Zone+Udaipur'
    window.open(locationUrl, '_blank')
  }

  return (
    <div
      className={`sticky lg:py-2 top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'
        }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link href="/" className="block w-[12rem] xl:mr-8">
          <img src="/assets/logo.svg" width={120} height={40} alt="Skyville" />
        </Link>

        <nav
          className={`${openNavigation ? 'flex' : 'hidden'
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? 'lg:hidden' : ''
                  } px-6 py-5 md:py-7 lg:-mr-0.25 lg:text-sm lg:font-semibold ${item.url === pathname
                    ? 'z-2 lg:text-n-1'
                    : 'lg:text-n-1/50'
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <div className="flex items-center gap-1.5 md:gap-3 ml-auto lg:ml-0">
          <button
            onClick={() => window.open('https://wa.me/9468578138', '_blank')}
            className="flex items-center"
          >
            <img
              src={WhatsappHeader.src}
              alt="WhatsApp"
              className="w-8 h-8 md:w-9 md:h-9"
              width={40}
              height={40}
            />
          </button>

          <button onClick={openLocationInMaps}>
            <MapPin className="w-7 h-7 md:w-8 md:h-8 lg:hover:text-color-1 transition-colors" />
          </button>

          <Link href="/book-now">
            <Button className="hidden md:flex uppercase text-sm">
              inquiry Now
            </Button>
          </Link>

          <Button className="lg:hidden" px="px-3" onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>

      <ButtonGradient />
    </div>
  )
}

export default Header
