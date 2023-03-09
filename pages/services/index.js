import styles from '../../styles/Services.module.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {motion} from 'framer-motion'


const services = () => {
    return (
        <div className={styles.service_one}>
            <div className={styles.service_hero}>
                <img className={styles.service_hero_img} src="service_hero_canna.png" alt="services" />
            <div className={styles.service_hero_text}>
            <h2 style={{paddingBottom:'12px'}}>Modern solutions to cannabis businesses</h2>
            <p>Stop wasting time with solutions that dont work. We prioritize working software</p>
            <div>
            <button className={styles.service_btn}> Get started now</button>
            </div>
            </div>
            </div>
            <div className={styles.service_overview}>
                <div className={styles.service_overview_wrap}>
                    <p style={{fontWeight:'450', paddingBottom:'12px'}}>Our competitive software services</p>
                <h2>All in one place for your canna business</h2>
                <div className={styles.overview_wrap_one}>
                <div className={styles.overview_box_one}>
                <h3>Transparency</h3>
                </div>
                <div className={styles.overview_box_two}>
                    <h3>Quality of code</h3>
                </div>
                </div>
                <div className={styles.overview_wrap_two}>
                <div className={styles.overview_box_three}>
                    <h3>Not relying on third parties</h3>
                </div>
                <div className={styles.overview_box_four}>
                    <h3>Imagination is the limit</h3>
                </div>
               </div>
                </div>
            </div>
            <div className={styles.service_brand} id="service_brand">
                <motion.div initial={{y:200, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:false}} transition={{delay:.1, duration:.4}} className={styles.service_brand_wrapper}>
                <div className={styles.service_brand_text}>
                    <h2 >We help build your brand</h2>
                    <p style={{paddingTop:'12px'}}>We help you build your brand and grow your business. Dont settle for someone elses brand, make yours unique</p>
                    <div style={{display:'flex', alignItems:'center', paddingTop:'20px'}}>
      <a style={{textDecoration:'underline', textDecorationColor:'#51CA58', fontWeight:'550', textDecorationThickness:'3px', textUnderlineOffset:'6px'}}>Learn more</a>
     <ArrowForwardIosIcon style={{fontSize:'16px', marginLeft:'12px'}}/>
      </div>
                </div>
            <video style={{width:'auto', height:'450px'}} source src="/service_brand.mp4" autoPlay loop muted></video>
            </motion.div>
       
      
            </div>
            <div className={styles.service_ecommerce}>
                <motion.div initial={{y:200, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:false}} transition={{delay:.1, duration:.4}} className={styles.service_ecommerce_wrap}>
                <img className={styles.service_ecommerce_img} src="service_cart.png" alt="ecommerce" />
                <div className={styles.service_ecommerce_text}>
<h2>Sophisticated & scalable commerce</h2>
<p style={{paddingTop:'12px'}}>We offer a powerful and flexible e-commerce platform that provides a lot of features and customization options.</p>
<div style={{display:'flex', alignItems:'center', paddingTop:'20px'}}>
      <a style={{textDecoration:'underline', textDecorationColor:'#51CA58', fontWeight:'550', textDecorationThickness:'3px', textUnderlineOffset:'6px'}}>Learn more</a>
     <ArrowForwardIosIcon style={{fontSize:'16px', marginLeft:'12px'}}/>
      </div>
</div>
      </motion.div>
       </div>
       <div className={styles.service_custom}>
        <div className={styles.service_custom_text}>
        <h2>Custom software development</h2>
        <p style={{paddingTop:'12px'}}>have complete control over every aspect of your code. Fine-tuned code to meet specific requirements or optimize performance</p>
        <div style={{display:'flex', alignItems:'center', paddingTop:'20px'}}>
      <a style={{textDecoration:'underline', textDecorationColor:'#51CA58', fontWeight:'550', textDecorationThickness:'3px', textUnderlineOffset:'6px'}}>Learn more</a>
     <ArrowForwardIosIcon style={{fontSize:'16px', marginLeft:'12px'}}/>
      </div>
        </div>
       <video style={{width:'auto', height:'400px'}} source src="/service_three.mp4" autoPlay loop muted></video>
       </div>
       <div className={styles.service_cms}>
       <div className={styles.service_cms_text}>
<h2>A content management system CMS</h2>
<p style={{paddingTop:'12px'}}>CMS software is designed to be user-friendly, with an intuitive interface that makes it easy for non-technical users to create and manage content. This means that users can focus on creating content, rather than worrying about the technical details of how to publish it. </p>
<div style={{display:'flex', alignItems:'center', paddingTop:'20px'}}>
      <a style={{textDecoration:'underline', textDecorationColor:'#51CA58', fontWeight:'550', textDecorationThickness:'3px', textUnderlineOffset:'6px'}}>Learn more</a>
     <ArrowForwardIosIcon style={{fontSize:'16px', marginLeft:'12px'}}/>
      </div>
</div>
<img className={styles.service_cms_img} src="service_cms.png" alt="cms" />

       </div>
       <div className={styles.service_support}>
        <div className={styles.service_support_text}>
            <h2>Unlimited customer support & training</h2>
            <p style={{paddingTop:'12px'}}>Always here for you, around the clock IT support! Faster response times and more immediate assistance</p>
            <div style={{display:'flex', alignItems:'center', paddingTop:'20px'}}>
      <a style={{textDecoration:'underline', textDecorationColor:'#51CA58', fontWeight:'550', textDecorationThickness:'3px', textUnderlineOffset:'6px'}}>Learn more</a>
     <ArrowForwardIosIcon style={{fontSize:'16px', marginLeft:'12px'}}/>
      </div>
        </div>
       <video style={{width:'auto', height:'550px'}} source src="/service_support.mp4" autoPlay loop muted></video>

       </div>
       <div className={styles.service_analytics}>
         <img className={styles.service_analytics_img} src="service_analytics.png" alt="analytics" />
            <div className={styles.service_analytics_text}>
            <h2>Analytics & reporting</h2>
            <p style={{paddingTop:'12px'}}>We provide you with the tools to track and analyze your website traffic and marketing campaigns. We also provide you with the tools to track and analyze your website traffic and marketing campaigns.</p>
            <div style={{display:'flex', alignItems:'center', paddingTop:'20px'}}>
      <a style={{textDecoration:'underline', textDecorationColor:'#51CA58', fontWeight:'550', textDecorationThickness:'3px', textUnderlineOffset:'6px'}}>Learn more</a>
     <ArrowForwardIosIcon style={{fontSize:'16px', marginLeft:'12px'}}/>
      </div>
      </div>
       </div>
        </div>
    );
}

export default services;