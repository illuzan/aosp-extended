import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'

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
          <img
            className='p-12'
            src='screenshot/gallery_1.webp'
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='p-12'
            src='screenshot/gallery_2.webp'
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='p-12'
            src='screenshot/gallery_3.webp'
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='p-12'
            src='screenshot/gallery_4.webp'
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='p-12'
            src='screenshot/gallery_5.webp'
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='p-12'
            src='screenshot/gallery_6.webp'
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='p-12'
            src='screenshot/gallery_7.webp'
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='p-12'
            src='screenshot/gallery_8.webp'
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='p-12'
            src='screenshot/gallery_9.webp'
            alt='Screenshot of the OS'
          />
        </SwiperSlide>{' '}
        <SwiperSlide>
          <img
            className='p-12'
            src='screenshot/gallery_10.webp'
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='p-12'
            src='screenshot/gallery_11.webp'
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='p-12'
            src='screenshot/gallery_12.webp'
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='p-12'
            src='screenshot/gallery_13.webp'
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='p-12'
            src='screenshot/gallery_14.webp'
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='p-12'
            src='screenshot/gallery_15.webp'
            alt='Screenshot of the OS'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
