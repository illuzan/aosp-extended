import React, { Fragment, useState } from 'react'
import { Disclosure, Transition, RadioGroup, Listbox } from '@headlessui/react'
import { SelectorIcon } from '@heroicons/react/solid'
import Builds from '../components/Builds'

function getBrands(data) {
  let set = new Set()
  data.map((device) => {
    set.add(device.brand)
  })
  return [...set]
}

export default function Devices({ brands, devices, initalDevices }) {
  // let [plan, setPlan] = useState('startup')
  // console.log(allSupportedDevices, 'allSupportedDevices')
  // const [devices, setDevices] = useState([])
  // const [brands, setBrands] = useState([])
  // const [specific, setSpecific] = useState(initalDevices)
  const [isLoading, setLoading] = useState(false)
  const [allSupportedBrand, setAllSupportedBrand] = useState(brands)
  const [allSupportedDevice, setAllSupportedDevice] = useState(devices)
  const [brandSpecificDevice, setBrandSpecificDevice] = useState(initalDevices)
  const [selectedBrand, setSelectedBrand] = useState(brands[0])

  function brandSpecificDevices(deviceBrand) {
    const test = devices.filter((device) => device.brand === deviceBrand)
    setSpecific(test)
  }

  function filterDevices(brandName) {
    const filteredList = allSupportedDevice.filter((device) => device.brand === brandName)
    setSelectedBrand(brandName)
    setBrandSpecificDevice(filteredList)
  }

  function getBrand(data) {
    var set = new Set()
    data.map((device) => {
      set.add(device.brand)
    })
    setBrands([...set])
  }
  function hello(device) {
    console.log(device)
  }
  function getDeviceBuild(deviceName, androidVersion) {
    console.log(deviceName, androidVersion)
  }

  // useEffect(() => {
  //   async function getDevices() {
  //     setLoading(true)
  //     const response = await fetch('https://api.aospextended.com/devices')
  //     const data = await response.json()
  //     setDevices(data)
  //     getBrand(data)
  //     // brandSpecificDevices('Asus')
  //     setLoading(false)
  //     console.log(specific)
  //   }
  //   getDevices()
  // }, [])
  return (
    <div className='grid grid-cols-4'>
      {/* Brand Button */}
      <div className='hidden col-span-1 md:block'>
        <RadioGroup className='flex flex-col' value={selectedBrand} onChange={(event) => filterDevices(event)}>
          <RadioGroup.Label className='sr-only'>Plan</RadioGroup.Label>
          {allSupportedBrand.map((brand, index) => (
            <RadioGroup.Option
              key={index}
              value={brand}
              className={({ checked }) =>
                `${checked
                  ? 'ring-2  ring-aex-accent'
                  : ''
                }
                    p-4 m-2 text-left text-lg  font-medium rounded-lg text-gray-100  bg-aex-300 flex focus:outline-none cursor-pointer `
              }
            >
              {brand}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </div>
      {/* Brand Listbox */}
      <div className="col-span-full md:hidden">
        <Listbox value={selectedBrand} onChange={(event) => filterDevices(event)}>
          <Listbox.Label className='sr-only'>Brands</Listbox.Label>
          <div className='mt-1 relative'>
            <Listbox.Button className='bg-aex-300 text-gray-100 relative w-full h-12 border border-aex-300 rounded-md shadow-2xl pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-aex-accent focus:border-aex-accent sm:text-sm'>
              <span className='block truncate '>{selectedBrand}</span>
              <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                <SelectorIcon
                  className='h-5 w-5 text-gray-100'
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
              <Listbox.Options className='absolute z-10 mt-1 w-full bg-aex-300 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
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
                    <span className='block truncate'
                    >
                      {brand}
                    </span>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>

      <h1 className='col-span-full md:col-start-2'>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {brandSpecificDevice.map((device) => (
              <Disclosure key={device.codename}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex items-center justify-between w-full p-4 my-2 text-sm font-medium text-left text-gray-100 rounded-lg bg-[#332e4e] hover:bg-aex-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                      <span className='text-lg font-semibold '>{`${device.name} (${device.codename})`}</span>
                      <div className='flex items-center  space-x-2  '>
                        {device.supported_versions.map((supportedVersion) => (
                          <p className='px-4 py-2 text-sm font-medium  text-white bg-emerald-400  rounded-r-full rounded-l-full shadow-sm'>
                            {supportedVersion.version_name}
                          </p>
                        ))}
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className={`${open ? 'transform rotate-180' : ''
                            } w-5 h-5 text-purple-500`}
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M5 15l7-7 7 7'
                          />
                        </svg>
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
          </>
        )}
      </h1>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch(`https://api.aospextended.com/devices`)
  const devices = await response.json()
  const brands = getBrands(devices)

  const initalDevices = devices.filter(
    (device) => device.brand === brands[0]
  )
  return {
    props: { brands, devices, initalDevices },
  }
}
