import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { GetStaticProps } from 'next'
import { getAllPosts } from '../utils/mdx'
import { Adsense } from '@ctrl/react-adsense'
import blogBanner from '../public/blog.png'

type Props = {
  allBlogPost: {
    frontmatter: {
      [key: string]: any
    }
    slug: string
  }[]
}

export default function Blog({ allBlogPost }: Props) {
  return (
    <div className='text-gray-100'>
      <Head>
        {/* Primary Meta Tags */}
        <title>Blog | AOSP Extended</title>
        <meta name='title' content='Blog | AOSP Extended' />
        <meta
          name='description'
          content='News and announcement for our new releases'
        />
        {/* Open Graph / Facebook */}
        <meta property='og:url' content='https://aospextended.com/blog' />
        <meta property='og:title' content='Blog | AOSP Extended' />
        <meta
          property='og:description'
          content='News and announcement for our new releases'
        />
        {/* Twitter */}
        <meta property='twitter:url' content='https://aospextended.com/blog' />
        <meta property='twitter:title' content='Blog | AOSP Extended' />
        <meta
          property='twitter:description'
          content='News and announcement for our new releases'
        />
      </Head>
      {/* Google Adsense script */}
      <Script src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' />
      <div className='overflow-hidden'>
        <Adsense
          className='adsbygoogle'
          client='ca-pub-5289211378270082'
          slot='1848543721'
          style={{ display: 'block' }}
          format='auto'
          responsive='true'
          adTest='on'
        />
      </div>
      <h1 className='text-4xl'>All Posts</h1>
      {/* Latest Post */}
      <div className='grid grid-cols-1 gap-8 mt-10 md:grid-cols-2'>
        <a
          className='flex flex-col p-6 shadow-lg bg-[#332e4e] space-y-6 rounded'
          href={`/blog/${allBlogPost[0].slug}`}
        >
          <Image src={blogBanner} alt='' />
          <h2 className='text-4xl font-medium '>
            {allBlogPost[0].frontmatter.title}
          </h2>
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
              <p>{allBlogPost[0].frontmatter.publishedAt}</p>
            </div>
          </div>
        </a>
        <div className='overflow-hidden'>
          <Adsense
            className='adsbygoogle'
            client='ca-pub-5289211378270082'
            slot='9848406956'
            style={{ display: 'block' }}
            format='auto'
            responsive='true'
            adTest='on'
          />
        </div>
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
                      <p>{item.frontmatter.publishedAt}</p>
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
