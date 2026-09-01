import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import './slideproduct.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Pagination,Autoplay } from 'swiper/modules';
const ProductImages = ({product}) => {
  return (
     <div className="imgs_item">
            {/* <div className="big_img">
              <img id='big_img' src={product.images[0]} alt={product.title} />
            </div> */}
            <div className="small_imgs">
              <Swiper  spaceBetween={5}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      
      
         pagination={true} modules={[Autoplay,Pagination]} 
        className="mySwiper"
      >


            
                   {
                product.images.map((img, i) => (
                  <SwiperSlide onClick={() => document.getElementById("big_img").src = img}  key={i} className='SwiperSlide'>
                  <img src={img} alt=""  />
                </SwiperSlide>
                
                ))
              }
                   
                  
            

           </Swiper>

            
            </div>
          </div>
  )
}

export default ProductImages
