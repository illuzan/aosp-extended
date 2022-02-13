import React from 'react'
import Image from 'next/image'
import { team, contributors } from '../data/team'
import { GitHubIcon, XDAIcon, TelegramIcon } from '../utils/icons'

const links = [
  {
    name: 'GitHub',
    icon: (props) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path
          fillRule='evenodd'
          d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z'
          clipRule='evenodd'
        />
      </svg>
    ),
  },
  {
    name: 'XDA Developers',
    icon: (props) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path
          fillRule='evenodd'
          d='M0 16.7L3.2 12.9L0 9.1L1.5 7.8L4.5 11.3L7.5 7.8L9 9.1L5.8 12.9L9 16.7L7.5 18L4.5 14.4L1.5 18L0 16.7M24 16.9C24 17.4 23.6 17.9 23 17.9H20C18.9 17.9 18 17 18 15.9V13.9C18 12.8 18.9 11.9 20 11.9H22V9.9H18V8H23C23.5 8 24 8.4 24 9M22 14H20V16H22V14M16 16.9C16 17.4 15.6 17.9 15 17.9H12C10.9 17.9 10 17 10 15.9V9.9C10 8.8 10.9 7.9 12 7.9H14V5H16V16.9M14 15.9V9.9H12V15.9H14Z'
          clipRule='evenodd'
        />
      </svg>
    ),
  },
  {
    name: 'Telegram',
    icon: (props) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path
          fillRule='evenodd'
          d='M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z'
          clipRule='evenodd'
        />
      </svg>
    ),
  },
]

export default function About() {
  // const GitHubIcon = links[0].icon
  // const XDAIcon = links[1].icon
  // const TelegramIcon = links[2].icon
  const teamList = [...team, ...contributors]
  return (
    <div>
      <div className='mb-8 text-center'>
        <h1 className='mb-4 text-4xl font-bold text-gray-100'>About Us</h1>
        <p className='text-gray-300'>
          An Android custom ROM that aims to provide useful customizations with
          stability.
        </p>
        <p className='text-gray-300'>
          It was stated because of why why whydsfsdaf 2017.
        </p>
      </div>
      <div className='m-4 space-y-8 md:space-y-0 md:grid lg:grid-cols-3 md:grid-cols-2 md:gap-8'>
        {teamList.map((feature) => (
          <div
            className='transition-colors border-2 shadow-md md:rounded-md bg-aex-300 border-aex-300 hover:border-aex-accent '
            key={feature.name}
          >
            <div className='flex items-center justify-start p-4 space-x-2'>
              <div className=''>
                <Image
                  class='rounded-full'
                  src={`${feature.github}.png`}
                  alt='User profile picture'
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h1 className='font-medium text-gray-100'>{feature.name}</h1>
                <p className='text-sm text-gray-300'>{feature.description}</p>
              </div>
            </div>
            <hr className='mx-4 border-aex-400 ' />
            <p className='p-4 text-lg text-gray-300'>{feature.bio}</p>
            <hr className='mx-4 border-aex-400 ' />
            <div className='flex justify-center p-4 space-x-4'>
              {feature.github ? (
                <a
                  href={feature.github}
                  className='text-gray-100 hover:text-aex-accent'
                >
                  <span className='sr-only'>{links[0].name}</span>
                  <GitHubIcon className='w-6 h-6 fill-gray-100 hover:fill-aex-accent' aria-hidden='true' />
                </a>
              ) : null}
              {feature.xda ? (
                <a
                  href={feature.xda}
                  className='text-gray-100 hover:text-aex-accent'
                >
                  <span className='sr-only'>{links[1].name}</span>
                  <XDAIcon className='w-6 h-6 fill-gray-100 hover:fill-aex-accent' aria-hidden='true' />
                </a>
              ) : null}
              {feature.telegram ? (
                <a
                  href={feature.telegram}
                  className='text-gray-100 hover:text-aex-accent'
                >
                  <span className='sr-only'>{links[2].name}</span>
                  <TelegramIcon className='w-6 h-6 fill-gray-100 hover:fill-aex-accent ' aria-hidden='true' />
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
