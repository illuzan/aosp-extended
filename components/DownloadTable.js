import React from 'react'
import { format } from 'date-fns'
import { parse } from 'date-fns'
import filesize from 'filesize'
import DownloadBuild from './DownloadBuild'
export default function DownloadTable({ deviceBuilds }) {

  return (
    <div className='overflow-auto text-gray-100 border shadow border-aex-400 sm:rounded-md '>
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
          {deviceBuilds?.map((device, index) => (
            <tr key={index}>
              <td className='px-6 py-4 '>
                {device.file_name}
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                {filesize(device.file_size)}
              </td>
              <td className='px-6 py-4 '>
                {/* console.log(format(parse(device.timestamp, 'yyyyMMdd-HHmm', new Date()), 'do MMM uuuu , h:m aaa')) */}
                {format(parse(device.timestamp, 'yyyyMMdd-HHmm', new Date()), 'MMM do uuuu, h:m aaa')}
              </td>
              <td className='px-6 py-4 text-sm whitespace-nowrap'><DownloadBuild buildInfo={deviceBuilds[index]} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
