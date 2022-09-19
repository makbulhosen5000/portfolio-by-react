import React from 'react'
import './Portfolio.css';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css'

function portfolio() {
  return (
    <div className="portfolio" id="portfolio">
    {/* heading */}
    <span >Recent Projects</span>
    <span>Portfolio</span>

    {/* slider */}
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className="portfolio-slider"
    >
      <SwiperSlide>
        <a href='https://project01.snadvanceltd.com/' target="_blank"><img src="https://project01.snadvanceltd.com/public/images/slider_images/1657112186.jpg" alt="" /></a>
      </SwiperSlide>
      <SwiperSlide>
      <a href='http://masjidalummah.com.au/' target="_blank"><img src="http://masjidalummah.com.au/upload/user_image/1652013131.jpg" alt="" /></a>
      </SwiperSlide>
      <SwiperSlide>
      <a href='https://charming-donut-3361f1.netlify.app/' target="_blank"><img src="https://flagcdn.com/w320/bd.png" alt="" /></a>
      </SwiperSlide>
      <SwiperSlide>
      <a href='https://luxury-elf-92d8ac.netlify.app/' target="_blank"><img src="https://flagcdn.com/w320/bd.png" alt="" /></a>
      </SwiperSlide>

    </Swiper>
  </div>
    
  )
}

export default portfolio