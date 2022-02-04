import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { SelectorIcon } from '@heroicons/react/solid'

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
]
export default function Example() {
  const [selected, setSelected] = useState(people[3])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Listbox.Label className='sr-only'>Brands</Listbox.Label>
      <div className='relative mt-1'>
        <Listbox.Button className='relative w-full h-12 py-2 pl-3 pr-10 text-left text-gray-100 border rounded-md shadow-2xl cursor-default bg-aex-300 border-aex-300 focus:outline-none focus:ring-1 focus:ring-aex-accent focus:border-aex-accent sm:text-sm'>
          <span className='block truncate '>{selected.name}</span>
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
            {people.map((person, index) => (
              <Listbox.Option
                key={index}
                className={({ active, selected }) =>
                  `${active ? 'bg-teal-400' : ''}
                      ${selected ? 'font-semibold bg-teal-400' : 'font-normal'}
                          cursor-default select-none relative py-2 pl-3 pr-9 text-gray-100`
                }
                value={person}
              >
                <span className='block truncate'
                >
                  {person.name}
                </span>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

{/* Brand Listbox */ }
{/* <div className="col-span-full md:hidden">
  <Listbox value={selectedBrand} onChange={(event) => filterDevices(event)}>
    <Listbox.Label className='sr-only'>Brands</Listbox.Label>
    <div className='relative mt-1'>
      <Listbox.Button className='relative w-full h-12 py-2 pl-3 pr-10 text-left text-gray-100 border rounded-md shadow-2xl cursor-default bg-aex-300 border-aex-300 focus:outline-none focus:ring-1 focus:ring-aex-accent focus:border-aex-accent sm:text-sm'>
        <span className='block truncate '>{selectedBrand}</span>
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
</div> */}
