import styles from '../styles/Services.module.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


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
                <div className={styles.service_brand_wrapper}>
                <div className={styles.service_brand_text}>
                    <h2 >We help build your brand</h2>
                    <p style={{paddingTop:'12px'}}>We help you build your brand and grow your business. Dont settle for someone elses brand, make yours unique</p>
                    <div style={{display:'flex', alignItems:'center', paddingTop:'20px'}}>
      <a style={{textDecoration:'underline', textDecorationColor:'#51CA58', fontWeight:'550', textDecorationThickness:'3px', textUnderlineOffset:'6px'}}>Learn more</a>
     <ArrowForwardIosIcon style={{fontSize:'16px', marginLeft:'12px'}}/>
      </div>
                </div>
            <video style={{width:'auto', height:'450px'}} source src="/service_brand.mp4" autoPlay loop muted></video>
            </div>
       
      
            </div>
            <div className={styles.service_ecommerce}>
                <img className={styles.service_ecommerce_img} src="service_cart.png" alt="ecommerce" />
<h2> ecommerce</h2>
       </div>
        </div>
    );
}

export default services;