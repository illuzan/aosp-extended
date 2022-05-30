import { Fragment } from 'react'
import { SelectorIcon } from '@heroicons/react/outline'
import { Listbox, Transition, RadioGroup } from '@headlessui/react'

type Props = {
  filterDeviceFunction: (brandName: string) => void
  brandList: string[]
  selectedBrand: string
}

export default function BrandList({
  filterDeviceFunction,
  brandList,
  selectedBrand,
}: Props) {
  return (
    <>
      {/* BrandList - Mobile */}
      <div className='col-span-full md:hidden'>
        <Listbox
          value={selectedBrand}
          onChange={(event) => filterDeviceFunction(event)}
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
                {brandList.map((brand, index) => (
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
      {/* BrandList - Desktop */}
      <div className='hidden col-span-1 md:block'>
        <RadioGroup
          className='flex flex-col'
          value={selectedBrand}
          onChange={(event) => filterDeviceFunction(event)}
        >
          <RadioGroup.Label className='sr-only'>Brands</RadioGroup.Label>
          {brandList.map((brand, index) => (
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
    </>
  )
}
