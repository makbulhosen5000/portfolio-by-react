import React from 'react'
import './Portfolio.css';
import masjid from './../../assets/img/masjid.png';
import snadvance from './../../assets/img/sn-advance.png';
import Country from './../../assets/img/country.png';
import Todo from './../../assets/img/todo.png';
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
        {/* image size 1214*614 */}
        <a href='https://project01.snadvanceltd.com/' target="_blank"><img src={masjid} alt="" /></a>
      </SwiperSlide>
      <SwiperSlide>
      <a href='http://masjidalummah.com.au/' target="_blank"><img src={snadvance} alt="" /></a>
      </SwiperSlide>
      <SwiperSlide>
      <a href='https://luxury-elf-92d8ac.netlify.app/' target="_blank"><img src={Todo} alt="" /></a>
      </SwiperSlide>
      <SwiperSlide>
      <a href='https://charming-donut-3361f1.netlify.app/' target="_blank"><img src={Country} alt="" /></a>
      </SwiperSlide>
    </Swiper>
  </div>
    
  )
}

export default portfolio