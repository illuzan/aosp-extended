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
      'Lorem ipsum, dolor sit amet consecteturedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Secure',
    description:
      'Lorem ipsum, derferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Regular updates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicsuscipit eaque, iste dolor cupiditate blanditiis ratione.',
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
            <dd className='mt-2 text-base text-gray-300'>
              {feature.description}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
