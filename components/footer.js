import React from 'react'

export default function Footer({ navigation, social }) {
  return (
    <footer className="py-12 overflow-hidden  lg:px-8">
      <nav className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
        {navigation.map((item) => (
          <div key={item.name} className="px-5 py-2">
            <a href={item.href} className="text-base text-gray-200 hover:text-aex-accent">
              {item.name}
            </a>
          </div>
        ))}
      </nav>
      <div className="flex justify-center mt-8 space-x-6">
        {social.map((item) => (
          <a key={item.name} href={item.href} className="text-gray-100 hover:text-aex-accent">
            <span className="sr-only">{item.name}</span>
            <item.icon className="w-6 h-6" aria-hidden="true" />
          </a>
        ))}
      </div>
      <p className="mt-8 text-base text-center text-gray-400">Made in <span className="pr-1">🇮🇳 </span> by <b>Gaurav</b></p>
    </footer>
  )
}
