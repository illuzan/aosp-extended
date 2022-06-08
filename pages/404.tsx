import Image from 'next/image'
import errorImage from '../public/404.png'

export default function Custom404() {
  return (
    <div className='flex flex-col items-center justify-center p-4 h-3/5'>
      <div className='w-60 h-60 shadow-2xl border-aex-300 bottom-4'>
        <Image src={errorImage} alt='404 Image' />
      </div>
      <p className='mt-4 text-2xl  text-gray-300 '>Page not found</p>
    </div>
  )
}
