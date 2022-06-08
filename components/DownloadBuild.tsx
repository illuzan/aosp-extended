import React, { Fragment, useState, useRef, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { format } from 'date-fns'
import { parse } from 'date-fns'
import filesize from 'filesize'
import {
  FileZipIcon,
  FileSizeIcon,
  Md5Icon,
  TotalDownloadIcon,
} from '../utils/icons'

type Props = {
  buildDetails: {
    file_name: string
    file_size: number
    timestamp: string
    md5: string
    download_link: string
    recovery_download_link?: string | undefined
    isCustomAvbSupported?: boolean | undefined
    downloads_count: number
    changelog?: string | undefined
  }
  openModal?: boolean
  showButton?: boolean
}

export default function DownloadBuild({
  buildDetails,
  openModal = false,
  showButton = true,
}: Props) {
  const [isChangelogOpen, setIsChangelogOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(openModal)
  const changelogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkIfClickedOutside = (event: MouseEvent) => {
      if (
        isChangelogOpen &&
        changelogRef.current &&
        !changelogRef.current.contains(event.target as Node)
      ) {
        setIsChangelogOpen(false)
      }
    }
    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [isChangelogOpen])

  return (
    <>
      {showButton ? (
        <button
          type='button'
          onClick={() => setIsModalOpen((value) => !value)}
          className='px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
        >
          Get Build
        </button>
      ) : null}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto '
          onClose={() => setIsModalOpen((value) => !value)}
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
              <div className='relative inline-block w-full max-w-xl p-4 my-8 text-left align-middle border-4 shadow-xl z-1 overflow-clip border-aex-100 bg-aex-400 rounded-2xl'>
                <div className='flex justify-center'>
                  <Dialog.Title
                    as='h3'
                    className='text-2xl font-medium leading-6 text-gray-100 '
                  >
                    Download Build
                  </Dialog.Title>
                </div>
                <Dialog.Description>
                  <div className='mt-4 '>
                    <div className='m-2 font-light text-gray-100 '>
                      {/* File Name */}
                      <div className='flex items-center p-4 border-b grow justify-items-center'>
                        <div className='bg-[#242038] rounded-full h-10 w-10 flex flex-none justify-center items-center mr-4'>
                          <FileZipIcon className='w-6 h-6' />
                        </div>
                        <div className='text-sm'>
                          <h3 className='font-medium'>
                            {buildDetails.file_name}
                          </h3>
                          <p>
                            {format(
                              parse(
                                buildDetails.timestamp,
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
                          <p>{filesize(buildDetails.file_size)}</p>
                        </div>
                      </div>
                      {/* MD5 */}
                      <div className='flex items-center p-4 grow justify-items-center'>
                        <div className='flex items-center justify-center flex-none w-10 h-10 mr-4 rounded-full'>
                          <Md5Icon className='w-6 h-6 fill-white' />
                        </div>
                        <div className='text-sm'>
                          <h4 className='font-normal'>Md5</h4>
                          <p>{buildDetails.md5}</p>
                        </div>
                      </div>
                      {/* Total Downloads */}
                      <div className='flex items-center p-4 border-b grow justify-items-center'>
                        <div className='flex items-center justify-center flex-none w-10 h-10 mr-4 rounded-full'>
                          <TotalDownloadIcon className='w-6 h-6 fill-white' />
                        </div>
                        <div className='text-sm'>
                          <h4 className='font-normal'>Total Downloads</h4>
                          <p>{buildDetails.downloads_count}</p>
                        </div>
                      </div>
                      {/* Download */}
                      {/* flex items-center p-4 space-x-2 justify-items-center */}
                      <div className='flex flex-wrap items-center p-2 justify-items-center'>
                        {buildDetails.download_link ? (
                          <a
                            className='px-4 m-2  py-1 hover:bg-[#21ef8b2d] transition-all font-medium uppercase border rounded border-aex-accent text-aex-accent'
                            href={buildDetails.download_link}
                          >
                            Build
                          </a>
                        ) : null}
                        {buildDetails.recovery_download_link ? (
                          <a
                            className='px-4 m-2 py-1 hover:bg-[#21ef8b2d] transition-all font-medium uppercase border rounded border-aex-accent text-aex-accent'
                            href={buildDetails.recovery_download_link}
                          >
                            Recovery
                          </a>
                        ) : null}
                        {buildDetails.isCustomAvbSupported ? (
                          <a
                            className='px-4 m-2 py-1 hover:bg-[#21ef8b2d] transition-all font-medium uppercase border rounded border-aex-accent text-aex-accent'
                            href='https://github.com/AospExtended-Devices/blobs/raw/main/avb_custom_key.img'
                          >
                            AVB
                          </a>
                        ) : null}
                        <button
                          className='px-4 py-1 m-2 hover:bg-[#21ef8b2d] transition-all font-medium uppercase border rounded border-aex-200 bg-aex-200 text-gray-100'
                          onClick={() => setIsChangelogOpen((value) => !value)}
                        >
                          Changelog
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Changelog */}
                  <div
                    ref={changelogRef}
                    className={` z-10 absolute inset-x-0 bottom-0   w-full transition-all h-[85%] bg-aex-300 border-gray-600 border overflow-y-auto
                   ${
                     isChangelogOpen
                       ? 'translate-y-1 block '
                       : ' translate-y-full hidden '
                   } `}
                  >
                    <div className='relative text-gray-100'>
                      <div className='sticky top-0 flex justify-between p-2 border-b bg-aex-300 border-aex-400 '>
                        <div aira-label='hidden' />
                        <h5 className='text-xl'>Changelog</h5>
                        <button
                          className=''
                          onClick={() => setIsChangelogOpen((value) => !value)}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6'
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
                      <div className='px-4 py-2 overflow-x-hidden overflow-y-auto text-sm leading-relaxed text-gray-100 whitespace-pre-wrap'>
                        {buildDetails.changelog ? (
                          <p> {buildDetails.changelog}</p>
                        ) : (
                          <p>No changelog found, lazy maintainer :P</p>
                        )}
                      </div>
                    </div>
                  </div>
                </Dialog.Description>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
