import React from 'react'
import Product from './Product'
import './slideproduct.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation,Autoplay } from 'swiper/modules';



const SlideProducts = ({data,title}) => {
      
  return (
    <div className='slideProducts slide'>
<div className="container">
  <div className="top_slide">
    <h2>{title}</h2>
  
  </div>
  <Swiper
  loop={data.length > 4}
   autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={5}
        spaceBetween={10}
        navigation={true} 
        modules={[Navigation,Autoplay]}
        breakpoints={{
          // عندما تكون الشاشة أكبر من أو تساوي 320 بكسل (موبايل)
          320: {
            slidesPerView: 1.5,
            spaceBetween: 5,
          },
           420: {
            slidesPerView: 1.75,
          },
          480: {
            slidesPerView: 2,
          },
            530: {
            slidesPerView: 2.25,
          },
          // عندما تكون الشاشة أكبر من أو تساوي 640 بكسل (تابلت صغير)
          620: {
            slidesPerView: 2.80,
          },
          // عندما تكون الشاشة أكبر من أو تساوي 768 بكسل (تابلت)
          700: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 3.5,
          },
          // عندما تكون الشاشة أكبر من أو تساوي 1024 بكسل (لاب توب / شاشات متوسطة)
          1024: {
            slidesPerView: 4,
          },
          // الشاشات الكبيرة جداً
          1280: {
            slidesPerView: 5,
          },
        }}
        className="mySwiper"
      >


            {
                  data.map((item)=>{
                        return(

<SwiperSlide className=''>
      <Product  key={item} item={item}/>


</SwiperSlide>
                        )
                  })
            }

           </Swiper>

</div>

    </div>
  )
}

export default SlideProducts
