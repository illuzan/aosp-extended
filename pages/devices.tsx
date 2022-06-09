import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import BuildList from '../components/BuildList'
import BrandList from '../components/BrandList'
import DownloadBuild from '../components/DownloadBuild'
import { ChevronUpIcon } from '@heroicons/react/outline'
import { Disclosure, Transition } from '@headlessui/react'
import { BuildDetails, SupportedDevices } from '../utils/types'

type Props = {
  allSupportedDevices: SupportedDevices
  allSupportedBrands: string[]
  initalDevices: SupportedDevices
}

export default function Devices({
  allSupportedDevices,
  allSupportedBrands,
  initalDevices,
}: Props) {
  const router = useRouter()
  const [brandSpecificDevice, setBrandSpecificDevice] = useState(initalDevices)
  const [selectedBrand, setSelectedBrand] = useState(allSupportedBrands[0])
  const [buildDetails, setBuildDetails] = useState<any>(null)
  const [openModal, setOpenModal] = useState(false)

  async function getBuildFromQuery(
    codename: string | string[],
    version: string | string[],
    build: string | string[]
  ) {
    const response = await fetch(
      `https://api.aospextended.com/builds/${codename}/${version}`
    )
    const buildDetails: BuildDetails = await response.json()
    const filteredBuild = buildDetails.filter(
      (buildItem) => buildItem.file_name === build
    )
    if (filteredBuild[0]) {
      setBuildDetails(filteredBuild[0])
      setOpenModal(true)
    }
  }

  function filterDevices(brandName: string) {
    const filteredList = allSupportedDevices.filter(
      (device) => device.brand === brandName
    )
    setSelectedBrand(brandName)
    setBrandSpecificDevice(filteredList)
  }

  useEffect(() => {
    if (router.isReady) {
      const { codename, version, build } = router.query
      if (!codename || !version || !build) {
      } else {
        getBuildFromQuery(codename, version, build)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady])

  return (
    <div className='grid grid-cols-5'>
      <Head>
        {/* Primary Meta Tags */}
        <title>Download | AOSP Extended</title>
        <meta name='title' content='Download | AOSP Extended' />
        <meta name='description' content='Download latest build' />
        {/* Open Graph / Facebook */}
        <meta property='og:url' content='https://aospextended.com/devices' />
        <meta property='og:title' content='Download | AOSP Extended' />
        <meta property='og:description' content='Download latest build' />
        {/* Twitter */}
        <meta
          property='twitter:url'
          content='https://aospextended.com/devices'
        />
        <meta property='twitter:title' content='Download | AOSP Extended' />
        <meta property='twitter:description' content='Download latest build' />
      </Head>
      <BrandList
        filterDeviceFunction={filterDevices}
        brandList={allSupportedBrands}
        selectedBrand={selectedBrand}
      />

      <h1 className='col-span-full md:col-start-2'>
        {brandSpecificDevice.map((device) => (
          <Disclosure key={device.codename}>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex items-center justify-between w-full p-4 my-2  text-left text-gray-100 rounded-lg bg-[#332e4e] hover:bg-[#403960] focus:outline-none focus-visible:ring focus-visible:ring-aex-accent focus-visible:ring-opacity-75 transition-colors'>
                  <span className='font-medium'>{`${device.name} (${device.codename})`}</span>
                  <div className='flex items-center space-x-2'>
                    <div className='flex flex-row-reverse flex-wrap items-center gap-2 text-gray-100'>
                      {device.supported_versions?.map((supportedVersion) => (
                        <p
                          className='px-4 py-2 text-sm rounded-l-full rounded-r-full shadow-sm bg-emerald-400'
                          key={supportedVersion.version_code}
                        >
                          {supportedVersion.version_name}
                        </p>
                      ))}
                    </div>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-white`}
                    />
                  </div>
                </Disclosure.Button>
                <Transition
                  enter='transition duration-100 ease-out'
                  enterFrom='transform scale-95 opacity-0'
                  enterTo='transform scale-100 opacity-100'
                  leave='transition duration-75 ease-out'
                  leaveFrom='transform scale-100 opacity-100'
                  leaveTo='transform scale-95 opacity-0'
                >
                  <Disclosure.Panel className='w-full px-4 pt-4 pb-2 text-sm '>
                    <div className='space-y-2 bg-aex-400 '>
                      {device.supported_versions?.map((supportedVersion) => (
                        <BuildList
                          deivceInfo={supportedVersion}
                          codename={device.codename}
                          versionName={supportedVersion.version_name}
                          maintainerName={supportedVersion.maintainer_name}
                          key={supportedVersion.version_code}
                        />
                      ))}
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        ))}
      </h1>
      {openModal ? (
        <DownloadBuild
          openModal={openModal}
          buildDetails={buildDetails}
          showButton={false}
        />
      ) : null}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  function filterDeviceBrands(data: SupportedDevices): string[] {
    let set = new Set<string>()
    data.map((device) => {
      set.add(device.brand)
    })
    let uniqueBrands = Array.from(set)
    return uniqueBrands
  }

  const response = await fetch(`https://api.aospextended.com/devices`)
  const allSupportedDevices: SupportedDevices = await response.json()
  const allSupportedBrands = filterDeviceBrands(allSupportedDevices)
  const initalDevices = allSupportedDevices.filter(
    (device) => device.brand === allSupportedBrands[0]
  )

  return {
    props: { allSupportedDevices, allSupportedBrands, initalDevices },
    revalidate: 1800, // 30 Minutes
  }
}
