import React, { Fragment, useState, useEffect } from 'react'
import { Disclosure, Transition, RadioGroup, Listbox } from '@headlessui/react'
import { SelectorIcon, ChevronUpIcon } from '@heroicons/react/outline'
import Builds from '../components/Builds'
import { useRouter } from 'next/router'

// function getBrands(data) {
//   let set = new Set()
//   data.map((device) => {
//     set.add(device.brand)
//   })
//   return [...set]
// }

// const foo = params.get('bar');

export default function Devices() {
  //   {
  //   allSupportedBrand,
  //   allSupportedDevice,
  //   initalDevices,
  // }
  const [allSupportedBrand, setAllSupportedBrand] = useState(null)
  const [allSupportedDevice, setAllSupportedDevice] = useState(null)
  const [brandSpecificDevice, setBrandSpecificDevice] = useState(null)
  const [selectedBrand, setSelectedBrand] = useState(null)
  // const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  const router = useRouter()

  useEffect(() => {
    if (process.browser) {
      console.log(router.query)
      const { codename, version, build } = router.query
      async function getDirectBuild() {
        const response = await fetch(
          `https://api.aospextended.com/builds/${codename}/${version}`
        )
        console.log(response)
      }
      getDirectBuild()
    }










    // if (process.browser) {
    //   const { codename, version, build } = router.query
    //   console.log(true)
    // }
    // const search = window.location.search;
    // const params = new URLSearchParams(search);
    // console.log(params)
    // console.log(router.query)
  }, [])

  useEffect(() => {
    async function getData() {
      setLoading(true)
      const response = await fetch(`https://api.aospextended.com/devices`)
      const data = await response.json()
      const test = getBrands(data)
      setAllSupportedDevice(data)
      setAllSupportedBrand(test)
      const initalDevices = data.filter(
        (device) => device.brand === test[0]
      )
      setBrandSpecificDevice(initalDevices)
      // console.log(router.isReady)
      setLoading(false)
    }
    // console.log(router.isReady)
    getData()
  }, [])



  function filterDevices(brandName) {
    const filteredList = allSupportedDevice.filter(
      (device) => device.brand === brandName
    )
    setSelectedBrand(brandName)
    setBrandSpecificDevice(filteredList)
  }

  function getBrands(data) {
    let set = new Set()
    data.map((device) => {
      set.add(device.brand)
    })
    return [...set]
  }

  if (isLoading) return <p>Loading...</p>

  return (
    <div className='grid grid-cols-5'>
      {/* Brand Button */}
      <div className='hidden col-span-1 md:block'>
        <RadioGroup
          className='flex flex-col'
          value={selectedBrand}
          onChange={(event) => filterDevices(event)}
        >
          <RadioGroup.Label className='sr-only'>Brands</RadioGroup.Label>
          {allSupportedBrand.map((brand, index) => (
            <RadioGroup.Option
              key={index}
              value={brand}
              className={({ checked }) =>
                `${checked ? 'ring-2  ring-aex-accent' : ''}
                    p-4 m-2 text-left font-medium rounded-lg text-gray-100  bg-aex-300 flex focus:outline-none cursor-pointer hover:bg-aex-200 transition-all `
              }
            >
              {brand}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </div>
      {/* Brand Listbox */}
      <div className='col-span-full md:hidden'>
        <Listbox
          value={selectedBrand}
          onChange={(event) => filterDevices(event)}
        >
          <Listbox.Label className='sr-only'>Brands</Listbox.Label>
          <div className='relative mt-1'>
            <Listbox.Button className='relative w-full h-12 py-2 pl-4 pr-10 font-medium text-left text-gray-100 border rounded-md shadow-2xl cursor-pointer bg-aex-300 border-aex-300 focus:outline-none focus:ring-1 focus:ring-aex-accent focus:border-aex-accent'>
              <span className='block truncate'>{selectedBrand}</span>
              <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                <SelectorIcon
                  className='w-5 h-5 text-gray-100'
                  aria-hidden='true'
                />
              </span>
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute z-10 w-full py-1 mt-1 overflow-auto text-base rounded-md shadow-lg bg-aex-300 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {allSupportedBrand.map((brand, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active, selected }) =>
                      `${active ? 'bg-teal-400' : ''}
                      ${selected ? 'font-semibold bg-teal-400' : 'font-normal'}
                          cursor-default select-none relative py-2 pl-3 pr-9 text-gray-100`
                    }
                    value={brand}
                  >
                    <span className='block truncate'>{brand}</span>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>

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
                        <Builds
                          deviceBuilds={supportedVersion}
                          codeName={device.codename}
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
    </div>
  )
}

// export async function getStaticProps() {
//   const response = await fetch(`https://api.aospextended.com/devices`)
//   const allSupportedDevice = await response.json()
//   const allSupportedBrand = getBrands(allSupportedDevice)
//   const initalDevices = allSupportedDevice.filter(
//     (device) => device.brand === allSupportedBrand[0]
//   )

//   return {
//     props: { allSupportedBrand, allSupportedDevice, initalDevices },
//   }
// }
