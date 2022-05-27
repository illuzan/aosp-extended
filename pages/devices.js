import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import BuildList from '../components/BuildList'
import BrandList from '../components/BrandList'
import DownloadBuild from '../components/DownloadBuild'
import { ChevronUpIcon } from '@heroicons/react/outline'
import { Disclosure, Transition } from '@headlessui/react'

export default function Devices({
  allSupportedDevices,
  allSupportedBrands,
  initalDevices,
}) {
  const router = useRouter()
  const [brandSpecificDevice, setBrandSpecificDevice] = useState(initalDevices)
  const [selectedBrand, setSelectedBrand] = useState(allSupportedBrands[0])
  const [buildDetails, setBuildDetails] = useState(null)
  const [openModal, setOpenModal] = useState(false)

  async function getBuildFromQuery(codename, version, build) {
    const response = await fetch(
      `https://api.aospextended.com/builds/${codename}/${version}`
    )
    const buildLists = await response.json()
    const filteredBuild = buildLists.filter(
      (buildList) => buildList.file_name === build
    )
    if (filteredBuild[0]) {
      setBuildDetails(filteredBuild[0])
      setOpenModal(true)
    }
  }

  function filterDevices(brandName) {
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
        return null
      } else {
        getBuildFromQuery(codename, version, build)
      }
    }
  }, [router.isReady])

  return (
    <div className='grid grid-cols-5'>
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
                <Disclosure.Button className='flex items-center justify-between w-full p-4 my-2  text-left text-gray-100 rounded-lg bg-[#332e4e] hover:bg-[#403960] focus:outline-none focus-visible:ring focus-visible:ring-aex-accent focus-visible:ring-opacity-75 transition-all'>
                  <span className='font-medium'>{`${device.name} (${device.codename})`}</span>
                  <div className='flex items-center space-x-2'>
                    <div className='flex flex-row-reverse flex-wrap items-center gap-2 text-gray-100'>
                      {device.supported_versions.map((supportedVersion) => (
                        <p className='px-4 py-2 text-sm rounded-l-full rounded-r-full shadow-sm bg-emerald-400'>
                          {supportedVersion.version_name}
                        </p>
                      ))}
                    </div>
                    <ChevronUpIcon
                      className={`${open ? 'transform rotate-180' : ''
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
                      {device.supported_versions.map((supportedVersion) => (
                        <BuildList
                          deivceInfo={supportedVersion}
                          codename={device.codename}
                          versionName={supportedVersion.version_name}
                          maintainerName={supportedVersion.maintainer_name}
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
        <DownloadBuild openModal={openModal} buildDetails={buildDetails} />
      ) : null}
    </div>
  )
}

export async function getStaticProps() {

  function filterDeviceBrands(data) {
    let set = new Set()
    data.map((device) => {
      set.add(device.brand)
    })
    return [...set]
  }

  const response = await fetch(`https://api.aospextended.com/devices`)
  const allSupportedDevices = await response.json()
  const allSupportedBrands = filterDeviceBrands(allSupportedDevices)
  const initalDevices = allSupportedDevices.filter(
    (device) => device.brand === allSupportedBrands[0]
  )

  return {
    props: { allSupportedDevices, allSupportedBrands, initalDevices },
    revalidate: 1800, // 30 Minutes
  }
}
