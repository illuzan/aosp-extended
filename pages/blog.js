import React from 'react'
import Link from 'next/link'
import { getAllPosts } from '../utils/mdx'
import { Adsense } from '@ctrl/react-adsense'

export default function Blog({ data }) {
  const date = new Date(data[0].frontmatter.publishedAt)
  const [month, day, year] = [
    date.toLocaleString('default', { month: 'short' }),
    date.getDate(),
    date.getFullYear(),
  ]
  console.log(data[0].frontmatter)
  return (
    <div className='text-gray-100'>
      <Adsense
        className='mb-6 border-8 rounded adsbygoogle'
        client='ca-pub-5289211378270082'
        slot='2672680700'
        style={{ display: 'block' }}
        format='auto'
        responsive='true'
      />
      <h1 className='text-4xl'>All Posts</h1>
      {/* Latest Post */}
      <div className='grid grid-cols-1 gap-8 mt-10 md:grid-cols-2'>
        <a
          className='flex flex-col p-6 shadow-lg bg-[#332e4e] space-y-6 rounded'
          href='#'
        >
          <img src='/b.png' alt='' className='w-full h-full' />
          <h1 className='text-4xl font-medium '>{data[0].frontmatter.title}</h1>
          <div className='flex justify-between pr-4 space-x-3 text-sm font-light text-center text-gray-300 justify-items-center'>
            <div className='flex space-x-1 text-center justify-items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <p>{data[0].frontmatter.author}</p>
            </div>
            <div className='flex space-x-1 text-center justify-items-center '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>
              <p>{`${month} ${day},${year}`}</p>
            </div>
          </div>
        </a>

        <Adsense
          className='mb-6 border-8 rounded adsbygoogle'
          client='ca-pub-5289211378270082'
          slot='2672680700'
          style={{ display: 'block' }}
          format='auto'
          responsive='true'
        />
      </div>

      {/* Other Posts */}
      <div className='grid grid-cols-1 gap-8 mt-10 lg:grid-cols-3 md:grid-cols-2'>
        {data.map((item) =>
          item.frontmatter.title === data[0].frontmatter.title ? null : (
            <article className='p-6 bg-[#332e4e]'>
            {/* <Link> */}
              <h3 className='mb-2 text-2xl'>{item.frontmatter.title}</h3>
              <p className='mb-6'>{item.frontmatter?.excerpt}</p>
              <div className='flex flex-col justify-between space-y-2 text-sm font-light text-center text-gray-300 justify-items-center'>
                <div className='flex space-x-1 text-center justify-items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <p>{data[0].frontmatter.author}</p>
                </div>
                <div className='flex space-x-1 text-center justify-items-center '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                    />
                  </svg>
                  <p>{`${month} ${day},${year}`}</p>
                </div>
              </div>
              <p></p>
            {/* </Link> */}
            </article>
          )
        )}
        {/* <div className='box-border text-base font-normal leading-6 text-indigo-900'>
          <a className='box-border right-0 flex flex-col items-center justify-between w-full max-w-full min-h-full p-6 text-sm font-semibold leading-5 text-gray-800 no-underline bg-white rounded-lg' href="#">ad</a>
        </div> */}
      </div>
    </div>
  )
}
export const getStaticProps = ({ params }) => {
  const data = getAllPosts()
  return {
    props: { data },
  }
}
