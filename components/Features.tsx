import React from 'react'
import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from '@heroicons/react/outline'

const features: {
  name: string
  description: string
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
}[] = [
  {
    name: 'OTA Updates',
    description:
      'Supports OTA updates that allow you to easily download and install the latest updates via the built-in Updater app. \n Updates are regularly published with the latest security patches every month.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Opensource',
    description:
      'Open source allowing anyone to inspect, change and build his OS based on it. \n It is free and developed by several developers from across the globe voluntarily.',
    icon: ScaleIcon,
  },
  {
    name: 'Customization',
    description:
      'It packs a handful of customization options allowing the user to personalize the OS in a way that works the best for them. \n Monet-theming engine support ensures that your OS UI/UX remains unique to everyone.',
    icon: LightningBoltIcon,
  },
]

export default function Features() {
  return (
    <div className='max-w-xl px-4 py-12 mx-auto mt-10 sm:px-6 lg:max-w-6xl lg:px-8'>
      <h2 className='sr-only'>A better way to send money.</h2>
      <dl className='space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8'>
        {features.map((feature) => (
          <div key={feature.name}>
            <dt>
              <p className='mt-5 text-xl font-medium leading-6 text-gray-100'>
                {feature.name}
              </p>
            </dt>
            <dd className='mt-2 text-base text-gray-300 whitespace-pre-line'>
              {feature.description}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
