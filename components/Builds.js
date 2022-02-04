import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/outline'
import ReactLoading from 'react-loading'
import DownloadTable from '../components/DownloadTable'
import DownloadBlock from '../components/DownloadBlock'

export default function Builds({
  deviceBuilds,
  versionName,
  maintainerName,
  codeName,
}) {
  const [devices, setDevices] = useState(null)
  const [loadBuilds, setLoadBuilds] = useState(false)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  async function getDevices() {
    if (loadBuilds) {
      return
    }
    setLoadBuilds(true)
    try {
      const response = await fetch(
        `https://api.aospextended.com/builds/${codeName}/${deviceBuilds.version_code}`
      )
      if (response.status !== 200) {
        setIsLoading(false)
        setError(true)
        return
      }
      const data = await response.json()
      setDevices(data)

    } catch (error) {
      setError(true)
    }
    setLoadBuilds(true)
    setIsLoading(false)
  }
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            onMouseEnter={getDevices}
            onFocus={getDevices}
            className={`${open ? 'rounded-b-none  ' : ''
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
              className={`${open ? 'transform rotate-180' : ''
                } w-5 h-5 text-white`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm !mt-0 bg-[#332e4e] text-gray-500 rounded-b-lg'>
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
            ) : error ?
              <div className='flex flex-col items-center justify-center p-4 '>
                <img className='w-40 h-40' src="404.png" alt="" />
                <p className='mt-2 text-xl font-light text-gray-300'>No Build Found</p>
              </div>
              : <>
                <div className='hidden mt-4 md:block'>
                  <DownloadTable deviceBuilds={devices} />
                </div>
                <div className='flex flex-col md:hidden'>
                  {devices?.map((device) => (
                    <DownloadBlock buildInfo={device} />
                  ))}
                </div>
              </>
            }
          </Disclosure.Panel>
        </>
      )
      }
    </Disclosure >
  )
}


//  <div className='hidden mt-4 md:block'>
//    <DownloadTable deviceBuilds={devices} />
//  </div>
//  <div className='flex flex-col md:hidden'>
//    {devices?.map((device, index) => (
//      <DownloadBlock buildInfo={device} />
//    ))}
//  </div>
// {
//   device.supported_versions.map((supportedVersion) => (
//     <Disclosure key={supportedVersion.version_code}>
//       {({ open }) => (
//         <>
//           <Disclosure.Button
//             onClick={getDeviceBuild(
//               supportedVersion.version_code,
//               device.codename
//             )}
//             className={`${open ? 'rounded-b-none  ' : ''
//               } flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-100 bg-[#332e4e] rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 transition-all`}
//           >
//             <div className='flex space-x-2'>
//               <div className='bg-[#242038] rounded-full h-10 w-10 flex justify-center items-center'>
//                 <svg
//                   viewBox='0 0 24 24'
//                   className='w-6 h-6'
//                 >
//                   <path
//                     fill='#21EF8B'
//                     d='M8 11.5a1.25 1.25 0 00-1.25 1.25A1.25 1.25 0 008 14a1.25 1.25 0 001.25-1.25A1.25 1.25 0 008 11.5m8 0a1.25 1.25 0 00-1.25 1.25A1.25 1.25 0 0016 14a1.25 1.25 0 001.25-1.25A1.25 1.25 0 0016 11.5M12 7c1.5 0 2.9.33 4.18.91l2.16-2.16a.996.996 0 111.41 1.41l-1.8 1.8A9.999 9.999 0 0122 17H2c0-3.29 1.59-6.21 4.05-8.04l-1.8-1.8a.996.996 0 111.41-1.41l2.16 2.16C9.1 7.33 10.5 7 12 7z'
//                   ></path>
//                 </svg>
//               </div>
//               <div className='text'>
//                 <h4>
//                   Android{' '}
//                   {supportedVersion.versionName}
//                 </h4>
//                 <p className='text-sm font-light text-gray-300'>
//                   {supportedVersion.maintainerName}
//                 </p>
//               </div>
//             </div>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               className={`${open ? 'transform rotate-180' : ''
//                 } w-5 h-5 text-purple-500`}
//               fill='none'
//               viewBox='0 0 24 24'
//               stroke='currentColor'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth={2}
//                 d='M5 15l7-7 7 7'
//               />
//             </svg>
//           </Disclosure.Button>
//           <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm !mt-0 bg-[#332e4e] text-gray-500 rounded-b-lg'>
//             If you're unhappy with your purchase for any
//             reason, email us within 90 days and we'll
//             refund you in full, no questions asked.
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   ))
// }

{
  /* <div className='overflow-hidden text-gray-100 shadow sm:rounded-md '>
  <table className='min-w-full divide-y divide-aex-400 sm:rounded-md'>
    <thead className='bg-aex-300 '>
      <tr>
        <th
          scope='col'
          className='px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-100 uppercase'
        >
          File Name
        </th>
        <th
          scope='col'
          className='px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-100 uppercase'
        >
          File size
        </th>
        <th
          scope='col'
          className='px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-100 uppercase'
        >
          Build date
        </th>
        <th
          scope='col'
          className='px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-100 uppercase'
        >
          Download
        </th>
      </tr>
    </thead>
    <tbody className=' divide-y divide-aex-400 bg-[#332e4e]'>
      {stats.countryCountList.map((country, countryIdx) => (
        <tr key={countryIdx}>
          <td className='px-6 py-4 text-sm font-medium whitespace-nowrap'>
            {countryIdx + 1}
          </td>
          <td className='px-6 py-4 text-sm font-medium whitespace-nowrap'>
            {country.name}
          </td>
          <td className='px-6 py-4 text-sm whitespace-nowrap'>
            {numberFormatter.format(country.count)}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div> */
}
