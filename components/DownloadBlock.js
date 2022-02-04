import React from 'react'
import { format } from 'date-fns'
import { parse } from 'date-fns'
import filesize from 'filesize'
import DownloadBuild from './DownloadBuild'
export default function DownloadBlock({ buildInfo }) {
  return (
    <div className="m-2 font-light text-gray-100 break-all rounded shadow-2xl bg-aex-400">
      {/* File Name */}
      <div className="flex items-center p-4 border-b grow justify-items-center">
        <div className="bg-[#242038] rounded-full h-10 w-10 flex flex-none justify-center items-center mr-4">
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path
              fill="#21EF8B"
              d="M14 17h-2v-2h-2v-2h2v2h2m0-6h-2v2h2v2h-2v-2h-2V9h2V7h-2V5h2v2h2m5-4H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"
            />
          </svg>
        </div>
        <div className="text-sm">
          <h3 className="font-medium">
            {buildInfo.file_name}
          </h3>
          <p>{format(parse(buildInfo.timestamp, 'yyyyMMdd-HHmm', new Date()), 'MMM do uuuu, h:m aaa')}</p>
        </div>
      </div>
      {/* File Size */}
      <div className="flex items-center p-4 grow justify-items-center">
        <div className="flex items-center justify-center flex-none w-10 h-10 mr-4 rounded-full">
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path
              d="M18,8H16V4H18M15,8H13V4H15M12,8H10V4H12M18,2H10L4,8V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2Z"
              style={{ fill: "rgb(255, 255, 255)" }}
            />
          </svg>
        </div>
        <div className="text-sm">
          <h4 className="font-normal">File Size</h4>
          <p>{filesize(buildInfo.file_size)}</p>
        </div>
      </div>
      {/* MD5 */}
      <div className="flex items-center p-4 grow justify-items-center">
        <div className="flex items-center justify-center flex-none w-10 h-10 mr-4 rounded-full">
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path
              d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M11.2,18.46L15.95,13.71L14.78,12.3L11.2,15.88L9.61,14.3L8.45,15.46L11.2,18.46Z"
              style={{ fill: "rgb(255, 255, 255)" }}
            />
          </svg>
        </div>
        <div className="text-sm">
          <h4 className="font-normal">Md5</h4>
          <p>{buildInfo.md5}</p>
        </div>
      </div>
      {/* Total Downloads */}
      <div className="flex items-center p-4 border-b grow justify-items-center">
        <div className="flex items-center justify-center flex-none w-10 h-10 mr-4 rounded-full">
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path
              d="M17.45,15.18L22,7.31V19L22,21H2V3H4V15.54L9.5,6L16,9.78L20.24,2.45L21.97,3.45L16.74,12.5L10.23,8.75L4.31,19H6.57L10.96,11.44L17.45,15.18Z"
              style={{ fill: "rgb(255, 255, 255)" }}
            />
          </svg>
        </div>
        <div className="text-sm">
          <h4 className="font-normal">Total Downloads</h4>
          <p>{buildInfo.downloads_count}</p>
        </div>
      </div>
      {/* Download */}
      <div className="flex items-center p-4 grow justify-items-center ">
        <button className="p-2 rounded hover:bg-[#21ef8b2d] uppercase font-medium  transition-all">
          Get Build
        </button>
      </div>
    </div>
  )
}
