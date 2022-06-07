import Link from 'next/link'
import Features from '../components/Features'
import Screenshot from '../components/Screenshots'

export default function Home() {
  return (
    <>
      <main className='px-4 mx-auto mt-12 max-w-7xl sm:mt-18'>
        <img src='/logo.svg' className='mx-auto h-80' alt='AospExtended Logo' />
        <div className='text-center'>
          <p className='max-w-md mx-auto mt-3 text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
            A stable Android custom ROM that aims to provide useful
            customizations.
          </p>
          <div className='max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8'>
            <div className='rounded-md shadow'>
              <Link href='/devices'>
                <a className='hover:opacity-90 bg-gradient-to-br from-teal-400 to-aex-accent  flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md   md:py-3 md:text-xl  md:px-4'>
                  Download
                </a>
              </Link>
            </div>
            <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
              <Link href='/blog'>
                <a className='flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-aex-300 hover:bg-aex-200 md:py-3 md:text-xl md:px-10'>
                  Blog
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Features />
      <Screenshot />
    </>
  )
}
