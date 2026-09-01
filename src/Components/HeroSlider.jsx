import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../pages/Home/home.css'
import {Link} from 'react-router-dom'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination,Autoplay } from 'swiper/modules';

const HeroSlider = () => {
  return (
    <div className='hero'>
      <div className="container">
            <Swiper  spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      
      
         pagination={true} modules={[Autoplay,Pagination]} className="mySwiper">
        <SwiperSlide className='SwiperSlide'>
   <div className="content">
<h4>Introducing the new</h4>
<h3>Microsoft xbox <br/> 360 Controller</h3>
<p>windows xp/10/7/8 ps3,Tv Box</p>
<Link to="/" className="btn">Shop Now</Link>
   </div>

<img src="/src/images/banner_Hero1.jpg" alt="slider hero 1" />
      
        </SwiperSlide>
         <SwiperSlide className='SwiperSlide'>
   <div className="content">
<h4>Introducing the new</h4>
<h3>Microsoft xbox <br/> 360 Controller</h3>
<p>windows xp/10/7/8 ps3,Tv Box</p>
<Link to="/" className="btn">Shop Now</Link>
   </div>

<img src="/src/images/banner_Hero2.jpg" alt="slider hero 1" />
      
        </SwiperSlide>  
          <SwiperSlide className='SwiperSlide'>
   <div className="content">
<h4>Introducing the new</h4>
<h3>Microsoft xbox <br/> 360 Controller</h3>
<p>windows xp/10/7/8 ps3,Tv Box</p>
<Link to="/" className="btn">Shop Now</Link>
   </div>

<img src="/src/images/banner_Hero3.jpg" alt="slider hero 1" />
      
        </SwiperSlide>  
      </Swiper>
</div>
    </div>
  )
}

export default HeroSlider
