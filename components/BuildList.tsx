import { useState } from 'react'
import ReactLoading from 'react-loading'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/outline'
import { format } from 'date-fns'
import { parse } from 'date-fns'
import filesize from 'filesize'
import DownloadBuild from './DownloadBuild'
import { BuildDetails } from '../utils/types'

type Props = {
  deivceInfo: {
    version_code: string
    version_name: string
    maintainer_name: string
    maintainer_url: string
    xda_thread: string
    tg_link?: string | null | undefined
    supportsCustomAvb?: boolean | null | undefined
  }
  versionName: string
  maintainerName: string
  codename: string
}

export default function BuildList({
  deivceInfo,
  versionName,
  maintainerName,
  codename,
}: Props) {
  const [buildList, setBuildList] = useState<BuildDetails | null>(null)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [buildAlreadyLoaded, setBuildAlreadyLoaded] = useState(false)

  async function getDeviceBuilds() {
    if (buildAlreadyLoaded) {
      return null
    }
    try {
      const response = await fetch(
        `https://api.aospextended.com/builds/${codename}/${deivceInfo.version_code}`
      )
      if (response.status !== 200) {
        setIsLoading(false)
        setError(true)
        return null
      }
      const data: BuildDetails = await response.json()
      setBuildList(data)
      setBuildAlreadyLoaded(true)
      setIsLoading(false)
    } catch (error) {
      setError(true)
    }
  }

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            onMouseEnter={getDeviceBuilds}
            onFocus={getDeviceBuilds}
            className={`${
              open ? 'rounded-b-none  ' : ''
            } flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-100 rounded-lg bg-[#332e4e] hover:bg-[#403960] focus:outline-none focus-visible:ring focus-visible:ring-aex-accent focus-visible:ring-opacity-75 transition-all`}
          >
            <div className='flex space-x-2'>
              <div className='bg-[#242038] rounded-full h-10 w-10 flex justify-center items-center'>
                <svg viewBox='0 0 24 24' className='w-6 h-6'>
                  <path
                    fill='#21EF8B'
                    d='M8 11.5a1.25 1.25 0 00-1.25 1.25A1.25 1.25 0 008 14a1.25 1.25 0 001.25-1.25A1.25 1.25 0 008 11.5m8 0a1.25 1.25 0 00-1.25 1.25A1.25 1.25 0 0016 14a1.25 1.25 0 001.25-1.25A1.25 1.25 0 0016 11.5M12 7c1.5 0 2.9.33 4.18.91l2.16-2.16a.996.996 0 111.41 1.41l-1.8 1.8A9.999 9.999 0 0122 17H2c0-3.29 1.59-6.21 4.05-8.04l-1.8-1.8a.996.996 0 111.41-1.41l2.16 2.16C9.1 7.33 10.5 7 12 7z'
                  ></path>
                </svg>
              </div>
              <div>
                <h4>Android {versionName}</h4>
                <p className='text-sm font-light text-gray-300'>
                  {maintainerName}
                </p>
              </div>
            </div>
            <ChevronUpIcon
              className={`${
                open ? 'transform rotate-180' : ''
              } w-5 h-5 text-white`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm !mt-0 bg-[#332e4e] text-gray-500 rounded-b-lg '>
            <div className='flex space-x-2'>
              <a
                className='bg-[#242038] rounded-full h-10 w-10 flex justify-center items-center'
                href=''
              >
                <svg viewBox='0 0 24 24' className='w-6 h-6'>
                  <path
                    d='M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z'
                    fill='#21EF8B'
                  ></path>
                </svg>
              </a>
              <a
                className='bg-[#242038] rounded-full h-10 w-10 flex justify-center items-center'
                href=''
              >
                <svg viewBox='0 0 24 24' className='w-6 h-6'>
                  <path
                    fill='#21EF8B'
                    d='M0 16.7l3.2-3.8L0 9.1l1.5-1.3 3 3.5 3-3.5L9 9.1l-3.2 3.8L9 16.7 7.5 18l-3-3.6-3 3.6L0 16.7m24 .2c0 .5-.4 1-1 1h-3c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2v-2h-4V8h5c.5 0 1 .4 1 1m-2 5h-2v2h2v-2m-6 2.9c0 .5-.4 1-1 1h-3c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2h2V5h2v11.9m-2-1v-6h-2v6h2z'
                  ></path>
                </svg>
              </a>
              <a
                className='bg-[#242038] rounded-full h-10 w-10 flex justify-center items-center'
                href=''
              >
                <svg viewBox='0 0 24 24' className='w-6 h-6'>
                  <path
                    fill='#21EF8B'
                    d='M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z'
                  ></path>
                </svg>
              </a>
            </div>
            {isLoading ? (
              <div className='flex items-center justify-center'>
                <ReactLoading
                  type='bars'
                  color='#21ef8b'
                  height={'12%'}
                  width={'12%'}
                />
              </div>
            ) : error ? (
              <div className='flex flex-col items-center justify-center p-4 '>
                <img className='w-40 h-40' src='404.png' alt='' />
                <p className='mt-2 text-xl font-light text-gray-300'>
                  No Build Found
                </p>
              </div>
            ) : (
              <>
                <div className='hidden mt-4 md:block overflow-auto text-gray-100 border shadow border-aex-400 sm:rounded-md'>
                  {/* <DownloadTable deviceBuilds={buildList} /> */}
                  {/* <div className=' '> */}
                  <table className='min-w-full divide-y table-fixed divide-aex-400 sm:rounded-md'>
                    <thead className='bg-aex-300 '>
                      <tr>
                        <th
                          scope='col'
                          className='px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-100 '
                        >
                          File Name
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-100 '
                        >
                          File size
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-100 '
                        >
                          Build date
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-100 '
                        >
                          Download
                        </th>
                      </tr>
                    </thead>
                    <tbody className=' divide-y divide-aex-400 bg-[#332e4e] text-sm '>
                      {buildList?.map((device, index) => (
                        <tr key={index}>
                          <td className='px-6 py-4 '>{device.file_name}</td>
                          <td className='px-6 py-4 whitespace-nowrap'>
                            {filesize(device.file_size)}
                          </td>
                          <td className='px-6 py-4 '>
                            {format(
                              parse(
                                device.timestamp,
                                'yyyyMMdd-HHmm',
                                new Date()
                              ),
                              'MMM do uuuu, h:m aaa'
                            )}
                          </td>
                          <td className='px-6 py-4 text-sm whitespace-nowrap'>
                            <DownloadBuild buildDetails={buildList[index]} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* </div> */}
                </div>
                <div className='flex flex-col md:hidden'>
                  {buildList?.map((device, index) => (
                    <div
                      className='m-2 font-light text-gray-100 break-all rounded shadow-2xl bg-aex-400'
                      key={index}
                    >
                      {/* File Name */}
                      <div className='flex items-center p-4 border-b grow justify-items-center'>
                        <div className='bg-[#242038] rounded-full h-10 w-10 flex flex-none justify-center items-center mr-4'>
                          <svg viewBox='0 0 24 24' className='w-6 h-6'>
                            <path
                              fill='#21EF8B'
                              d='M14 17h-2v-2h-2v-2h2v2h2m0-6h-2v2h2v2h-2v-2h-2V9h2V7h-2V5h2v2h2m5-4H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z'
                            />
                          </svg>
                        </div>
                        <div className='text-sm'>
                          <h3 className='font-medium'>{device.file_name}</h3>
                          <p>
                            {format(
                              parse(
                                device.timestamp,
                                'yyyyMMdd-HHmm',
                                new Date()
                              ),
                              'MMM do uuuu, h:m aaa'
                            )}
                          </p>
                        </div>
                      </div>
                      {/* File Size */}
                      <div className='flex items-center p-4 grow justify-items-center'>
                        <div className='flex items-center justify-center flex-none w-10 h-10 mr-4 rounded-full'>
                          <svg viewBox='0 0 24 24' className='w-6 h-6'>
                            <path
                              d='M18,8H16V4H18M15,8H13V4H15M12,8H10V4H12M18,2H10L4,8V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2Z'
                              style={{ fill: 'rgb(255, 255, 255)' }}
                            />
                          </svg>
                        </div>
                        <div className='text-sm'>
                          <h4 className='font-normal'>File Size</h4>
                          <p>{filesize(device.file_size)}</p>
                        </div>
                      </div>
                      {/* MD5 */}
                      <div className='flex items-center p-4 grow justify-items-center'>
                        <div className='flex items-center justify-center flex-none w-10 h-10 mr-4 rounded-full'>
                          <svg viewBox='0 0 24 24' className='w-6 h-6'>
                            <path
                              d='M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M11.2,18.46L15.95,13.71L14.78,12.3L11.2,15.88L9.61,14.3L8.45,15.46L11.2,18.46Z'
                              style={{ fill: 'rgb(255, 255, 255)' }}
                            />
                          </svg>
                        </div>
                        <div className='text-sm'>
                          <h4 className='font-normal'>Md5</h4>
                          <p>{device.md5}</p>
                        </div>
                      </div>
                      {/* Total Downloads */}
                      <div className='flex items-center p-4 border-b grow justify-items-center'>
                        <div className='flex items-center justify-center flex-none w-10 h-10 mr-4 rounded-full'>
                          <svg viewBox='0 0 24 24' className='w-6 h-6'>
                            <path
                              d='M17.45,15.18L22,7.31V19L22,21H2V3H4V15.54L9.5,6L16,9.78L20.24,2.45L21.97,3.45L16.74,12.5L10.23,8.75L4.31,19H6.57L10.96,11.44L17.45,15.18Z'
                              style={{ fill: 'rgb(255, 255, 255)' }}
                            />
                          </svg>
                        </div>
                        <div className='text-sm'>
                          <h4 className='font-normal'>Total Downloads</h4>
                          <p>{device.downloads_count}</p>
                        </div>
                      </div>
                      {/* Download */}
                      <div className='flex items-center p-4 grow justify-items-center '>
                        <DownloadBuild buildDetails={device} />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
