"use client"
// Import Swiper React components
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "./style.css"

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules"
import React, { useRef } from "react"
import Image from "next/image"
import Rabit from "./rabit.png"
import rabit from "./rabit2.png"

export const Carousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperClass>()
  return (
    <div>
      <div>
        <Swiper
          style={{
           
          }}
         
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs,Autoplay]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <Image src={Rabit} width={300} height={300} alt="helo" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={rabit} width={300} height={300} alt="helo" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Rabit} width={300} height={300} alt="helo" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={rabit} width={300} height={300} alt="helo" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Rabit} width={300} height={300} alt="helo" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={rabit} width={300} height={300} alt="helo" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Rabit} width={300} height={300} alt="helo" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={rabit} width={300} height={300} alt="helo" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper my-3"
        >
          <SwiperSlide>
            <Image src={Rabit} alt="helo" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={rabit} alt="helo" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Rabit} alt="helo" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={rabit} alt="helo" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Rabit} alt="helo" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={rabit} alt="helo" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Rabit} alt="helo" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={rabit} alt="helo" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
