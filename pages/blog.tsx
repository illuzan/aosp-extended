import React from 'react'
import Link from 'next/link'
import { getAllPosts } from '../utils/mdx'
import { Adsense } from '@ctrl/react-adsense'
import { GetStaticProps } from 'next'

type Props = {
  allBlogPost: {
    frontmatter: {
      [key: string]: any
    }
    slug: string
  }[]
}

export default function Blog({ allBlogPost }: Props) {
  const date = new Date(allBlogPost[0].frontmatter.publishedAt)
  const [month, day, year] = [
    date.toLocaleString('default', { month: 'short' }),
    date.getDate(),
    date.getFullYear(),
  ]
  return (
    <div className='text-gray-100'>
      <Adsense
        className='adsbygoogle'
        client='ca-pub-5289211378270082'
        slot='1848543721'
        style={{ display: 'block' }}
        format='auto'
        responsive='true'
        adTest='on'
      />
      <h1 className='text-4xl'>All Posts</h1>
      {/* Latest Post */}
      <div className='grid grid-cols-1 gap-8 mt-10 md:grid-cols-2'>
        <a
          className='flex flex-col p-6 shadow-lg bg-[#332e4e] space-y-6 rounded'
          href={`/blog/${allBlogPost[0].slug}`}
        >
          <img src='/b.png' alt='' className='w-full h-full' />
          <h1 className='text-4xl font-medium '>
            {allBlogPost[0].frontmatter.title}
          </h1>
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
              <p>{allBlogPost[0].frontmatter.author}</p>
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
          className='adsbygoogle'
          client='ca-pub-5289211378270082'
          slot='9848406956'
          style={{ display: 'block' }}
          format='auto'
          responsive='true'
          // adTest='on'
        />
      </div>

      {/* Other Posts */}
      <div className='grid grid-cols-1 gap-8 mt-10 lg:grid-cols-3 md:grid-cols-2'>
        {allBlogPost.map((item) =>
          item.frontmatter.title === allBlogPost[0].frontmatter.title ? null : (
            <article className='p-6 bg-[#332e4e]'>
              <Link href={`/blog/${item.slug}`}>
                <a>
                  <h3 className='mb-2 text-2xl'>{item.frontmatter.title}</h3>
                  <p className='mb-6'>{item.frontmatter.description}</p>
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
                      <p>{item.frontmatter.author}</p>
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
                </a>
              </Link>
            </article>
          )
        )}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allBlogPost = getAllPosts()
  allBlogPost.sort(function (a, b) {
    return (
      new Date(b.frontmatter.publishedAt).valueOf() -
      new Date(a.frontmatter.publishedAt).valueOf()
    )
  })
  return {
    props: { allBlogPost },
  }
}
