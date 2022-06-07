import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { DeviceStats } from '../../utils/types'

type Props = {
  deviceStats: DeviceStats
  slug: string
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

export default function Dev({ deviceStats, slug }: Props) {
  const numberFormatter = new Intl.NumberFormat()

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{deviceStats.deviceModel} | AOSP Extended</title>
        <meta
          name='title'
          content={`${deviceStats.deviceModel} | AOSP Extended`}
        />
        <meta
          name='description'
          content={`View the most recent statistics for ${deviceStats.deviceModel}.`}
        />
        {/* Open Graph / Facebook */}
        <meta
          property='og:url'
          content={`https://aospextended.com/stats/${slug}`}
        />
        <meta
          property='og:title'
          content={`${deviceStats.deviceModel} | AOSP Extended`}
        />
        <meta
          property='og:description'
          content={`View the most recent statistics for ${deviceStats.deviceModel}.`}
        />
        {/* Twitter */}
        <meta
          property='twitter:url'
          content={`https://aospextended.com/stats/${slug}`}
        />
        <meta
          property='twitter:title'
          content={`${deviceStats.deviceModel} | AOSP Extended`}
        />
        <meta
          property='twitter:description'
          content={`View the most recent statistics for ${deviceStats.deviceModel}.`}
        />
      </Head>
      <h1 className='mb-8 text-4xl font-bold text-center text-gray-100'>{`${deviceStats.deviceModel} - Total Installations`}</h1>
      {/* Total Installations */}
      <div className=''>
        <div className='mb-12 overflow-hidden text-gray-100 shadow sm:rounded-md'>
          <table className='min-w-full divide-y divide-aex-400 sm:rounded-md'>
            <thead className='bg-aex-300 '>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-100 uppercase'
                >
                  Official
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-100 uppercase'
                >
                  Unofficial
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-100 uppercase'
                >
                  Total
                </th>
              </tr>
            </thead>
            <tbody className=' divide-y divide-aex-400 bg-[#332e4e]'>
              <tr>
                <td className='px-6 py-4 font-medium text text-aex-accent whitespace-nowrap'>
                  {numberFormatter.format(deviceStats.officialInstallations)}
                </td>
                <td className='px-6 py-4 font-medium text text-aex-accent whitespace-nowrap'>
                  {numberFormatter.format(deviceStats.unofficialInstallations)}
                </td>
                <td className='px-6 py-4 textfont-medium text-aex-accent whitespace-nowrap'>
                  {numberFormatter.format(deviceStats.totalInstallations)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4'>
        {/* Popular Builds */}
        <div className=''>
          <h1 className='mb-4 text-2xl font-medium text-center text-gray-100'>
            Popular Builds
          </h1>
          <div className='overflow-hidden text-gray-100 shadow sm:rounded-md '>
            <table className='min-w-full divide-y table-fixed divide-aex-400 sm:rounded-md'>
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
                    Builds
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
                {deviceStats.buildsCountList.map((build, buildIdx) => (
                  <tr key={build.buildName}>
                    <td className='px-6 py-4 text-sm font-medium whitespace-nowrap'>
                      {buildIdx + 1}
                    </td>
                    <td className='px-6 py-4 text-sm font-medium'>
                      {build.buildName}
                    </td>
                    <td className='px-6 py-4 text-sm whitespace-nowrap'>
                      {numberFormatter.format(build.count)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Popular Countries */}
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
                {deviceStats.countryCountList.map((country, countryIdx) => (
                  <tr key={country.name}>
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as IParams
  const response = await fetch(`https://api.aospextended.com/stats/${slug}`)
  const deviceStats: DeviceStats = await response.json()
  return {
    props: { deviceStats, slug },
  }
}
