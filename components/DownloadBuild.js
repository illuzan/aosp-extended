import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  FileZipIcon,
  FileSizeIcon,
  Md5Icon,
  TotalDownloadIcon,
} from '../utils/icons'
import { format } from 'date-fns'
import { parse } from 'date-fns'
import filesize from 'filesize'
import ChangelogModal from './ChangelogModal'

export default function DownloadBuild({ buildInfo }) {
  console.log(buildInfo, 'buildInfo')
  let [changelogOpen, setChangelogOpen] = useState(false)
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function change() {
    setIsOpen(true)
  }

  return (
    <>
      <button
        type='button'
        onClick={openModal}
        className='px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
      >
        Get Build
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto '
          onClose={closeModal}
        >
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 transition-opacity bg-opacity-90 bg-aex-400' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='relative inline-block w-full max-w-md p-4 my-8 text-left align-middle border-4 shadow-xl overflow-clip border-aex-100 bg-aex-400 rounded-2xl '>
                {/* Changelog */}
                <div
                  className={`absolute inset-x-0 bottom-0 rounded-xl  w-full transition-all h-3/4 bg-aex-300 border-gray-600 border   px-4 py-2
                   ${changelogOpen ? 'translate-y-1 ' : ' translate-y-full'} `}
                >
                  <div className='relative '>
                    <div className='sticky top-0 flex justify-between text-gray-100 '>
                      <div aira-label='hidden'></div>
                      <h5 className='text-2xl'>Changelog</h5>
                      <button
                        className=''
                        onClick={() => setChangelogOpen((value) => !value)}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-6 h-6 '
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                      </button>
                    </div>
                    <div className='overflow-y-auto'>
                      1 <br />
                      1 <br />
                      1 <br />
                      1 <br />
                      1 <br />
                      1 <br />
                      1 <br />
                      1 <br />
                      1 <br />
                      1 <br />
                      1 <br />
                      1 <br />
                      1 <br />
                      1 <br />
                      1 <br />
                      1 <br />
                      1 <br />
                      1 <br />
                      1 <br />
                      1 <br />
                      1 <br />
                      1 <br />
                      1 <br />
                      1 <br />
                      1 <br />
                      1 <br />
                      1 <br />
                    </div>
                  </div>
                </div>
                <Dialog.Title
                  as='h3'
                  className='pl-2 text-xl font-medium leading-6 text-gray-100'
                >
                  Download Build
                </Dialog.Title>
                <div className='mt-4 '>
                  <div className='m-2 font-light text-gray-100 '>
                    {/* File Name */}
                    <div className='flex items-center p-4 border-b grow justify-items-center'>
                      <div className='bg-[#242038] rounded-full h-10 w-10 flex flex-none justify-center items-center mr-4'>
                        <FileZipIcon className='w-6 h-6' />
                      </div>
                      <div className='text-sm'>
                        <h3 className='font-medium'>{buildInfo.file_name}</h3>
                        <p>
                          {format(
                            parse(
                              buildInfo.timestamp,
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
                        <FileSizeIcon className='w-6 h-6 fill-white' />
                      </div>
                      <div className='text-sm'>
                        <h4 className='font-normal'>File Size</h4>
                        <p>{filesize(buildInfo.file_size)}</p>
                      </div>
                    </div>
                    {/* MD5 */}
                    <div className='flex items-center p-4 grow justify-items-center'>
                      <div className='flex items-center justify-center flex-none w-10 h-10 mr-4 rounded-full'>
                        <Md5Icon className='w-6 h-6 fill-white' />
                      </div>
                      <div className='text-sm'>
                        <h4 className='font-normal'>Md5</h4>
                        <p>{buildInfo.md5}</p>
                      </div>
                    </div>
                    {/* Total Downloads */}
                    <div className='flex items-center p-4 border-b grow justify-items-center'>
                      <div className='flex items-center justify-center flex-none w-10 h-10 mr-4 rounded-full'>
                        <TotalDownloadIcon className='w-6 h-6 fill-white' />
                      </div>
                      <div className='text-sm'>
                        <h4 className='font-normal'>Total Downloads</h4>
                        <p>{buildInfo.downloads_count}</p>
                      </div>
                    </div>
                    {/* Download */}
                    <div className='flex items-center p-4 grow justify-items-center '>
                      <button className='p-2 rounded hover:bg-[#21ef8b2d] uppercase font-medium  transition-all'>
                        Build
                      </button>
                      <button
                        className='p-2 rounded hover:bg-[#21ef8b2d] uppercase font-medium  transition-all'
                        onClick={change}
                      >
                        Recovery
                      </button>
                      <button
                        className='p-2 rounded hover:bg-[#21ef8b2d] uppercase font-medium  transition-all'
                        onClick={change}
                      >
                        AVB
                      </button>
                      <button
                        className='p-2 rounded hover:bg-[#21ef8b2d] uppercase font-medium  transition-all'
                        onClick={() => setChangelogOpen((value) => !value)}
                      >
                        Changelog
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
