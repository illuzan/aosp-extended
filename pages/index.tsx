import Features from '../components/features'
import Screenshot from '../components/screenshot'

export default function Home() {
  return (
    <>
      <main className='px-4 mx-auto mt-16 max-w-7xl sm:mt-24'>
        <img src='/logo.svg' className='mx-auto h-80' alt='AospExtended Logo' />
        <div className='text-center'>
          {/* <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Hello</span>{' '}
            <span className="block text-indigo-600 xl:inline">World</span>
          </h1> */}
          <p className='max-w-md mx-auto mt-3 text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
            An Android custom ROM that aims to provide useful customizations
            with stability.
          </p>
          <div className='max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8'>
            <div className='rounded-md shadow'>
              <a
                href='#'
                className='flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-aex-300 hover:bg-indigo-700 md:py-3 md:text-lg md:px-4'
              >
                Download
              </a>
            </div>
            <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
              <a
                href='#'
                className='flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-600 border border-transparent rounded-md bg-aex-200 hover:bg-gray-50 md:py-4 md:text-lg md:px-10'
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </main>
      <Features />
      <Screenshot />
    </>
  )
}
