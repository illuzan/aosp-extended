import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);

export default function Screenshot() {
  return (
    <div className="max-w-xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
      <Swiper initialSlide={3} breakpoints={{
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
        spaceBetween={30} pagination={{
          "clickable": true
        }} className=" mySwiper">
        <div className="swiper-pagination"></div>
        <SwiperSlide><img className='p-12' src="screenshot/photo_2021-09-24_18-57-07.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='p-12' src="screenshot/photo_2021-09-24_18-57-07.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='p-12' src="screenshot/photo_2021-09-24_18-57-07.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='p-12' src="screenshot/photo_2021-09-24_18-57-07.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='p-12' src="screenshot/photo_2021-09-24_18-57-07.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='p-12' src="screenshot/photo_2021-09-24_18-57-07.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='p-12' src="screenshot/photo_2021-09-24_18-57-07.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='p-12' src="screenshot/photo_2021-09-24_18-57-07.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='p-12' src="screenshot/photo_2021-09-24_18-57-07.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='p-12' src="screenshot/photo_2021-09-24_18-57-07.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}
