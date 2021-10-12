import Link from 'next/link'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


export default function Navbar({ navigation }) {
  return (
    <Popover className="relative" >
      <nav className="flex justify-between pt-6 pb-16 sm:pb-24 ">
        {/* logo left side */}
        <Link href="/">
          <a >
            <span className="sr-only">Aosp Extended</span>
            <img src="/group.svg" className="h-7 sm:h-8" alt='AospExtended Logo' />
          </a>
        </Link>
        {/* Links right side */}
        <div className="hidden space-x-6 md:block">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} >
              <a className="font-medium text-gray-100 hover:text-aex-accent">{item.name}</a>
            </Link>
          ))}
        </div>
        {/* Menu button */}
        <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md md:hidden bg-aex-300 hover:bg-aex-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-aex-accent">
          <span className="sr-only">Open main menu</span>
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 pt-2 transition origin-top-right transform md:hidden"
          >
            <div className="overflow-hidden rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 bg-aex-300">
              <div className="flex items-center justify-between px-5 pt-4">
                <a href="#">
                  <span className="sr-only">Aosp Extended</span>
                  <img src="/group.svg" className="h-7 sm:h-8" alt='AospExtended Logo' />
                </a>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md md:hidden bg-aex-300 hover:bg-aex-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-aex-accent">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              {/* Links right side */}
              <div className="px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} >
                    <a className="block px-3 py-2 text-base font-medium text-gray-100 rounded-md hover:text-gray-300 hover:bg-aex-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-aex-accent">{item.name}</a>
                  </Link>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </nav>
    </Popover>
  )
}
