import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { StatsTypes } from '../utils/types'
import { DeviceIcon, DownloadIcon } from '../utils/icons'

type Props = {
  stats: StatsTypes
}

export default function Stats({ stats }: Props) {
  const numberFormatter = new Intl.NumberFormat()
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Stats | AOSP Extended</title>
        <meta name='title' content='Stats | AOSP Extended' />
        <meta
          name='description'
          content='View the most recent statistics for popular devices and builds.'
        />
        {/* Open Graph / Facebook */}
        <meta property='og:url' content='https://aospextended.com/stats' />
        <meta property='og:title' content='Stats | AOSP Extended' />
        <meta
          property='og:description'
          content='View the most recent statistics for popular devices and builds.'
        />
        {/* Twitter */}
        <meta property='twitter:url' content='https://aospextended.com/stats' />
        <meta property='twitter:title' content='Stats | AOSP Extended' />
        <meta
          property='twitter:description'
          content='View the most recent statistics for popular devices and builds.'
        />
      </Head>
      <h1 className='mb-8 text-4xl font-bold text-center text-gray-100'>
        Stats - All Devices
      </h1>
      <div className='mb-6 space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4'>
        <div className='flex justify-between p-4 rounded bg-aex-accent'>
          <DeviceIcon className='w-12 h-12 text-gray-900' />
          <div className='flex flex-col text-right'>
            <p className='text-sm text-gray-700'>Total Devices</p>
            <p className='text-2xl font-bold text-gray-800'>
              {numberFormatter.format(stats.deviceCountList.length)}
            </p>
          </div>
        </div>
        <div className='flex justify-between p-4 rounded justify-items-center bg-aex-accent'>
          <DownloadIcon className='w-12 h-12 text-gray-900' />
          <div className='flex flex-col text-right'>
            <p className='text-sm'>Total Downloads</p>
            <p className='text-2xl font-bold'>
              {numberFormatter.format(stats.totalInstallations)}
            </p>
          </div>
        </div>
      </div>
      <div className='space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4'>
        <div className=''>
          <h1 className='mb-4 text-2xl font-medium text-center text-gray-100'>
            Popular Devices
          </h1>
          <div className='overflow-hidden text-gray-100 shadow sm:rounded-md '>
            <table className='min-w-full divide-y divide-aex-400 sm:rounded-md'>
              <thead className='bg-aex-300 '>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-100 uppercase'
                  >
                    #
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-100 uppercase'
                  >
                    Device
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-100 uppercase'
                  >
                    Installations
                  </th>
                </tr>
              </thead>
              <tbody className=' divide-y divide-aex-400 bg-[#332e4e]'>
                {stats.deviceCountList.map((device, deviceIdx) => (
                  <tr key={device.name}>
                    <td className='px-6 py-4 text-sm font-medium whitespace-nowrap'>
                      {deviceIdx + 1}
                    </td>
                    <td className='px-6 py-4 text-sm text-aex-accent '>
                      <Link href={`/stats/${device.name}`}>
                        <a>{`${device.model} (${device.name})`}</a>
                      </Link>
                    </td>
                    <td className='px-6 py-4 text-sm whitespace-nowrap'>
                      {numberFormatter.format(device.count)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className=''>
          <h1 className='mb-4 text-2xl font-medium text-center text-gray-100'>
            Popular Countries
          </h1>
          <div className='overflow-hidden text-gray-100 shadow sm:rounded-md '>
            <table className='min-w-full divide-y divide-aex-400 sm:rounded-md'>
              <thead className='bg-aex-300 '>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-100 uppercase'
                  >
                    #
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-100 uppercase'
                  >
                    Countries
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-100 uppercase'
                  >
                    Installations
                  </th>
                </tr>
              </thead>
              <tbody className=' divide-y divide-aex-400 bg-[#332e4e]'>
                {stats.countryCountList.map((country, countryIdx) => (
                  <tr key={countryIdx}>
                    <td className='px-6 py-4 text-sm font-medium whitespace-nowrap'>
                      {countryIdx + 1}
                    </td>
                    <td className='px-6 py-4 text-sm font-medium '>
                      {country.name}
                    </td>
                    <td className='px-6 py-4 text-sm whitespace-nowrap'>
                      {numberFormatter.format(country.count)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.aospextended.com/stats')
  const stats: StatsTypes = await response.json()
  return {
    props: { stats },
    // Re-generate this page after 2 hours
    revalidate: 7200,
  }
}
