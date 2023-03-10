import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Swiper, SwiperSlide } from "swiper/react";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import React, { useRef, useState } from 'react';
import "swiper/css";
import ShopIcon from '@mui/icons-material/Shop';
import TuneIcon from '@mui/icons-material/Tune';
import "swiper/css/free-mode";
import { Autoplay, Pagination, Navigation, FreeMode,Grid } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PaidIcon from '@mui/icons-material/Paid';
import "swiper/css/grid";
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Link from 'next/link';
import { motion } from 'framer-motion';


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
      <motion.div initial={{y:200, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:false}} transition={{delay:.1, duration:.4}}  className={styles.home2_wrap}>
      <div className={styles.home2_text}>
<h2>Experience the power of software.</h2>

<p style={{padding:'20px 0'}}>Features like online ordering, loyalty programs, and personalized promotions help provide a better customer experience and increase sales.</p>
<div style={{display:'flex', alignItems:'center'}}>
      <a style={{textDecoration:'underline', textDecorationColor:'#51CA58', fontWeight:'550', textDecorationThickness:'3px', textUnderlineOffset:'6px'}}>Learn more</a>
     <ArrowForwardIosIcon style={{fontSize:'16px', marginLeft:'12px'}}/>
      </div>
      </div>
      <video style={{width:'auto', height:'500px'}} source src="/home2_video.mp4" autoPlay loop muted></video>
      </motion.div>
      </div>
      <div className={styles.home3}>
        <div className={styles.home3_wrap}>
        <div style={{display:'flex', flexDirection:'column',paddingTop:'60px' , alignItems:'center' }}>
        <h2 style={{textAlign:'left', color:'#FAF9F7'}} >Software &</h2>
        <h2 style={{textAlign:'left', color:'#51CA58'}}>cannabis</h2>
        <p style={{textAlign:'left', color:'#FAF9F7', width:'30%', paddingTop:'12px'}}>A cannabis software automates inventory management, sales tracking, and reporting, streamlining business processes, and reducing the manual workload.</p>
        </div>
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
       
      style={{paddingTop:'60px', paddingBottom:'90px', paddingRight:'90px',paddingLeft:'90px'}} >
        <SwiperSlide style={{color:'#fff', backgroundColor:'#090600', borderRadius:'25px',    boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'}}>
        <div className={styles.swiper_slide_content}>
            <div className={styles.swiper_slide_title}>
            <AddBusinessIcon style={{color:'#27241D', fontSize:'50px',backgroundColor:'#C1F2C7', padding:'6px', borderRadius:'10px'}}/>
              <h3 style={{color:'#51CA58'}}>Branding</h3>
            <p style={{color:'#fff'}}>As a cannabis business grows, a software can easily scale with the business. </p>
            <Link href="/services#service_brand" scroll={true}>
              <button className={styles.learn_more_btn}>learn more</button>
            </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{color:'#fff', backgroundColor:'#000', borderRadius:'25px', boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'}}>
          <div className={styles.swiper_slide_content}>
            <div className={styles.swiper_slide_title}>
            <ShopIcon style={{color:'#27241D', fontSize:'50px',backgroundColor:'#C1F2C7', padding:'6px', borderRadius:'10px'}}/>
              <h3 style={{color:'#51CA58'}}>E-commerce</h3>
            <p style={{color:'#fff'}}>As a cannabis business grows, a software can easily scale with the business. </p>
            <button className={styles.learn_more_btn}>learn more</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{color:'#fff', backgroundColor:'#000', borderRadius:'25px',  boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'}}>
        <div className={styles.swiper_slide_content}>
            <div className={styles.swiper_slide_title}>
            <TuneIcon style={{color:'#27241D', fontSize:'50px',backgroundColor:'#C1F2C7', padding:'6px', borderRadius:'10px'}}/>
              <h3 style={{color:'#51CA58'}}>Custom</h3>
            <p style={{color:'#fff'}}>As a cannabis business grows, a software can easily scale with the business. </p>
            <button className={styles.learn_more_btn}>learn more</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{color:'#fff', backgroundColor:'#000', borderRadius:'25px',  boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'}}>
        <div className={styles.swiper_slide_content}>
            <div className={styles.swiper_slide_title}>
            <VolunteerActivismIcon style={{color:'#27241D', fontSize:'50px',backgroundColor:'#C1F2C7', padding:'6px', borderRadius:'10px'}}/>
              <h3 style={{color:'#51CA58'}}>Hand-coded</h3>
            <p style={{color:'#fff'}}>As a cannabis business grows, a software can easily scale with the business. </p>
            <button className={styles.learn_more_btn}>learn more</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{color:'#fff', backgroundColor:'#000', borderRadius:'25px'}}>
        <div className={styles.swiper_slide_content}>
            <div className={styles.swiper_slide_title}>
            <VideoSettingsIcon style={{color:'#27241D', fontSize:'50px',backgroundColor:'#C1F2C7', padding:'6px', borderRadius:'10px'}}/>
              <h3 style={{color:'#51CA58'}}>CMS</h3>
            <p style={{color:'#fff'}}>As a cannabis business grows, a software can easily scale with the business. </p>
            <button className={styles.learn_more_btn}>learn more</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{color:'#fff', backgroundColor:'#000', borderRadius:'25px'}}>
        <div className={styles.swiper_slide_content}>
            <div className={styles.swiper_slide_title}>
            <AnalyticsIcon style={{color:'#27241D', fontSize:'50px',backgroundColor:'#C1F2C7', padding:'6px', borderRadius:'10px'}}/>
              <h3 style={{color:'#51CA58'}}>Analytics</h3>
            <p style={{color:'#fff'}}>As a cannabis business grows, a software can easily scale with the business. </p>
            <button className={styles.learn_more_btn}>learn more</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{color:'#fff', backgroundColor:'#000', borderRadius:'25px'}}>
        <div className={styles.swiper_slide_content}>
            <div className={styles.swiper_slide_title}>
            <PaidIcon style={{color:'#27241D', fontSize:'50px',backgroundColor:'#C1F2C7', padding:'6px', borderRadius:'10px'}}/>
              <h3 style={{color:'#51CA58'}}>Payments</h3>
            <p style={{color:'#fff'}}>As a cannabis business grows, a software can easily scale with the business. </p>
            <button className={styles.learn_more_btn}>learn more</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{color:'#fff', backgroundColor:'#000', borderRadius:'25px'}}>
        <div className={styles.swiper_slide_content}>
            <div className={styles.swiper_slide_title}>
            <AssuredWorkloadIcon style={{color:'#27241D', fontSize:'50px',backgroundColor:'#C1F2C7', padding:'6px', borderRadius:'10px'}}/>
              <h3 style={{color:'#51CA58'}}>Training</h3>
            <p style={{color:'#fff'}}>As a cannabis business grows, a software can easily scale with the business. </p>
            <button className={styles.learn_more_btn}>learn more</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{color:'#fff', backgroundColor:'#000', borderRadius:'25px'}}>
        <div className={styles.swiper_slide_content}>
            <div className={styles.swiper_slide_title}>
            <SupportAgentIcon style={{color:'#27241D', fontSize:'50px',backgroundColor:'#C1F2C7', padding:'6px', borderRadius:'10px'}}/>
              <h3 style={{color:'#51CA58'}}>Unlimited support</h3>
            <p style={{color:'#fff'}}>As a cannabis business grows, a software can easily scale with the business. </p>
            <button className={styles.learn_more_btn}>learn more</button>
            </div>
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
        <div className={styles.home_tech}>
          <h1>tech leveraged</h1>
          <Swiper
        slidesPerView={5}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className={styles.swiper_tech}
      >
        <SwiperSlide className={styles.swiper_slider_tech}>
          <img className={styles.tech_img} src="mongodb_icon.png" alt="mongo" />
          <p>MongoDB</p>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slider_tech}>
        <img className={styles.tech_img} src="aws_ec2.png" alt="aws ec2" />
        <p>Aws Ec2</p>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slider_tech}>
        <img className={styles.tech_img} src="aws_icon.png" alt="aws " />
        <p>AWS</p>
        
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slider_tech}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles.swiper_slider_tech}>
        <img className={styles.tech_img} src="nextjs.png" alt="next js" />
        <p>Next Js</p>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slider_tech}>Slide 6</SwiperSlide>
        <SwiperSlide className={styles.swiper_slider_tech}>
        <img className={styles.tech_img} src="js_icon.png" alt="next js" />
        <p>JavaScript</p>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slider_tech}>Slide 8</SwiperSlide>
        <SwiperSlide className={styles.swiper_slider_tech}>
        <img className={styles.tech_img} src="medusajs_icon.png" alt="next js" />
        <p>Medusa Js</p>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slider_tech}>Slide 9</SwiperSlide>
        <SwiperSlide className={styles.swiper_slider_tech}>
        <img className={styles.tech_img} src="react_icon.svg" alt="next js" />
        <p>React Js</p>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slider_tech}>Slide 9</SwiperSlide>
        <SwiperSlide className={styles.swiper_slider_tech}>
        <img className={styles.tech_img} src="openai_icon.png" alt="next js" />
        <p>Open AI</p>

        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slider_tech}>Slide 9</SwiperSlide>
        <SwiperSlide className={styles.swiper_slider_tech}>Slide 9</SwiperSlide>
      </Swiper>

      <div style={{display:'flex', alignItems:'center'}}>
      <a style={{textDecoration:'underline', textDecorationColor:'#51CA58', fontWeight:'550', textDecorationThickness:'3px', textUnderlineOffset:'6px'}}>Learn more</a>
     <ArrowForwardIosIcon style={{fontSize:'16px', marginLeft:'12px'}}/>
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
            <h2>View our live demo! </h2>
            <button className={styles.demo_btn}>View demo<PlayArrowIcon/></button>
            </div>
    </section>
  )
}
