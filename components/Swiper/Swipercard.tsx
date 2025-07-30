import React from 'react'
import { Swiper , SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from "swiper/modules";

export default function Swipercard() {
  return (
    <div>
        <Swiper
        modules={[Navigation , Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{clickable : true}}
        >

        </Swiper>
    </div>
  )
}
