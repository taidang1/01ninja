import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import { Swiper, SwiperSlide } from "swiper/react";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import React, { useRef, useState } from 'react';
import "swiper/css";
import ShopIcon from '@mui/icons-material/Shop';

import "swiper/css/free-mode";
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';




export default function Home(props) {

  return (
    <section>
      <div className={styles.home_top}></div>
    <div className={styles.homepage}>
 <div className={styles.hero_backdrop}></div>
     <div className={styles.home_slogan}>
      <h1 style={{color:'#FAF9F7'}}>Transforming ideas into solutions.</h1>
      <p style={{color:'#FAF9F7', fontSize:'18px', paddingTop:'12px', lineHeight:'1.2', paddingBottom:'12px'}}>Our team of experienced developers and designers are ready to help you build your next project.</p>
      <div className={styles.home_btn_group}>
      <button style={{display:'flex', alignItems:'center', }} className={styles.home_btn}>Contact us<PhoneCallbackIcon style={{marginLeft:'4px'}}/></button> 
      <button className={styles.home_btn2}>learn more</button>
      </div>
      </div>
    </div>
    <div className={styles.home2}>
      <div className={styles.home2_text}>
<h2>Experience the power of software.</h2>

<p style={{padding:'20px 0'}}>Features like online ordering, loyalty programs, and personalized promotions help provide a better customer experience and increase sales.</p>
<div style={{display:'flex', alignItems:'center'}}>
      <a style={{textDecoration:'underline', textDecorationColor:'#51CA58', fontWeight:'550', textDecorationThickness:'3px', textUnderlineOffset:'6px'}}>Learn more</a>
     <ArrowForwardIosIcon style={{fontSize:'16px', marginLeft:'12px'}}/>
      </div>
      </div>
      <video style={{width:'auto', height:'550px'}} source src="/home2_video.mp4" autoPlay loop muted></video>
      </div>
      <div className={styles.home3}>
        <div style={{display:'flex', alignItems:'center', flexDirection:'column',paddingTop:'60px' }}>
        <h2 style={{textAlign:'left', color:'#FAF9F7'}} >Software &</h2>
        <h2 style={{textAlign:'left', color:'#51CA58'}}>cannabis</h2>
        </div>
        <div className={styles.swiper_wrap}>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        
    
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50
          }
        }}
       
      style={{padding:'90px'}} >
        <SwiperSlide style={{color:'#fff', backgroundColor:'#090600', borderRadius:'25px',    boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'}}>
          <div className={styles.swiper_slide_content}>
            <AddBusinessIcon style={{color:'#27241D', fontSize:'50px',backgroundColor:'#C1F2C7', padding:'6px', borderRadius:'10px'}}/>
            <div className={styles.swiper_slide_title}>Slide 1</div>
            <div>
            <button className={styles.learn_more_btn}>learn more</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{color:'#fff', backgroundColor:'#000', borderRadius:'25px', boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'}}>
          <div className={styles.swiper_slide_content}>
            <ShopIcon style={{color:'#27241D', fontSize:'50px',backgroundColor:'#C1F2C7', padding:'6px', borderRadius:'10px'}}/>
            <div className={styles.swiper_slide_title}>Slide 2</div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{color:'#fff', backgroundColor:'#000', borderRadius:'25px',  boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'}}>
          <div className={styles.swiper_slide_content}>
            <div className={styles.swiper_slide_title}>Slide 3</div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{color:'#fff', backgroundColor:'#000', borderRadius:'25px',  boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'}}>
          <div className={styles.swiper_slide_content}>
            <div className={styles.swiper_slide_title}>Slide 4</div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{color:'#fff', backgroundColor:'#000', borderRadius:'25px'}}>
          <div className={styles.swiper_slide_content}>
            <div className={styles.swiper_slide_title}>Slide 5</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.swiper_slide_content}>
            <div className={styles.swiper_slide_title}>Slide 6</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.swiper_slide_content}>
            <div className={styles.swiper_slide_title}>Slide 7</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.swiper_slide_content}>
            <div className={styles.swiper_slide_title}>Slide 8</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.swiper_slide_content}>
            <div className={styles.swiper_slide_title}>Slide 9</div>
          </div>
        </SwiperSlide>

 
      </Swiper>
      </div>
      </div>
      <div className={styles.home4}>
        
        <div style={{borderRadius:'25px',
      width:'500px',margin:'20px',}}>
        <Swiper 
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 9500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
         style={{ borderRadius:'25px', }}
          >
        <SwiperSlide style={{borderRadius:'25px'}}>
          <img
            className={styles.swiper_slide_image}
            src="https://studio.swiperjs.com/demo-images/models/01.jpg"
          />

        </SwiperSlide>
        <SwiperSlide style={{borderRadius:'25px'}}>
          <img
          className={styles.swiper_slide_image}
            src="https://studio.swiperjs.com/demo-images/models/02.jpg"
          />

      
        </SwiperSlide >

        <SwiperSlide style={{borderRadius:'25px'}}>
          <img
          className={styles.swiper_slide_image}
            src="https://studio.swiperjs.com/demo-images/models/03.jpg"
          />

        </SwiperSlide>

        <SwiperSlide style={{borderRadius:'25px'}}>
          <img
           className={styles.swiper_slide_image}
            src="https://studio.swiperjs.com/demo-images/models/04.jpg"
          />

        </SwiperSlide>

        <SwiperSlide style={{borderRadius:'25px'}}>
          <img
     className={styles.swiper_slide_image}
            src="https://studio.swiperjs.com/demo-images/models/05.jpg"
          />


        </SwiperSlide>

       
      </Swiper>
      
      </div>
      <div className={styles.home4_text}>
      <h2>Software helps your cannabis business.</h2>
      <p style={{paddingTop:'12px', paddingBottom:'20px'}}>Managing a cannabis business can be complex and time-consuming, with multiple tasks to handle, such as inventory management, sales tracking and customer data. </p>
      <div style={{display:'flex', alignItems:'center'}}>
      <a style={{textDecoration:'underline', textDecorationColor:'#51CA58', fontWeight:'550', textDecorationThickness:'3px', textUnderlineOffset:'6px'}}>Learn more</a>
     <ArrowForwardIosIcon style={{fontSize:'16px', marginLeft:'12px'}}/>
      </div>
      </div>
        </div>
        <div className={styles.home5}>
          <div className={styles.home5_text}>
          <h2 style={{textAlign:'center'}}>Our customers rave!</h2>
          </div>
        <Swiper
        Pagination={false}
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
      
        modules={[FreeMode]}
        className={styles.swiper_five}
      >
        <SwiperSlide className={styles.swiper_slider_five}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.swiper_slider_five}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.swiper_slider_five}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.swiper_slider_five}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles.swiper_slider_five}>Slide 5</SwiperSlide>
        <SwiperSlide className={styles.swiper_slider_five}>Slide 6</SwiperSlide>
        <SwiperSlide className={styles.swiper_slider_five}>Slide 7</SwiperSlide>
        <SwiperSlide className={styles.swiper_slider_five}>Slide 8</SwiperSlide>
        <SwiperSlide className={styles.swiper_slider_five}>Slide 9</SwiperSlide>
      </Swiper>
          </div>
          <div className={styles.home6}>
            </div>
    </section>
  )
}
