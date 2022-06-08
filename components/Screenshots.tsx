import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import screenshot1 from '../public/screenshot/gallery_1.webp'
import screenshot2 from '../public/screenshot/gallery_2.webp'
import screenshot3 from '../public/screenshot/gallery_3.webp'
import screenshot4 from '../public/screenshot/gallery_4.webp'
import screenshot5 from '../public/screenshot/gallery_5.webp'
import screenshot6 from '../public/screenshot/gallery_6.webp'
import screenshot7 from '../public/screenshot/gallery_7.webp'
import screenshot8 from '../public/screenshot/gallery_8.webp'
import screenshot9 from '../public/screenshot/gallery_9.webp'
import screenshot10 from '../public/screenshot/gallery_10.webp'
import screenshot11 from '../public/screenshot/gallery_11.webp'
import screenshot12 from '../public/screenshot/gallery_12.webp'
import screenshot13 from '../public/screenshot/gallery_13.webp'
import screenshot14 from '../public/screenshot/gallery_14.webp'
import screenshot15 from '../public/screenshot/gallery_15.webp'

SwiperCore.use([Pagination])

export default function Screenshot() {
  return (
    <div className='max-w-xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8'>
      <Swiper
        initialSlide={0}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          920: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={12}
        pagination={{
          clickable: true,
        }}
        className=' mySwiper'
      >
        <div className='swiper-pagination'></div>
        <SwiperSlide>
          <Image
            className='!px-4 !py-8'
            src={screenshot1}
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='!px-4 !py-8'
            src={screenshot2}
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='!px-4 !py-8'
            src={screenshot3}
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='!px-4 !py-8'
            src={screenshot4}
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='!px-4 !py-8'
            src={screenshot5}
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='!px-4 !py-8'
            src={screenshot6}
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='!px-4 !py-8'
            src={screenshot7}
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='!px-4 !py-8'
            src={screenshot8}
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='!px-4 !py-8'
            src={screenshot9}
            alt='Screenshot of the OS'
          />
        </SwiperSlide>{' '}
        <SwiperSlide>
          <Image
            className='!px-4 !py-8'
            src={screenshot10}
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='!px-4 !py-8'
            src={screenshot11}
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='!px-4 !py-8'
            src={screenshot12}
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='!px-4 !py-8'
            src={screenshot13}
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='!px-4 !py-8'
            src={screenshot14}
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='!px-4 !py-8'
            src={screenshot15}
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
