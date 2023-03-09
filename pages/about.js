import styles from '../styles/About.module.css';
import BalanceIcon from '@mui/icons-material/Balance';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ScienceIcon from '@mui/icons-material/Science';
import {motion} from 'framer-motion';


const about = () => {
    return (
        <div className={styles.about_section}>
            <div className={styles.about_header}>
                <motion.div initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{delay:.1, duration:.5, type:'spring'}} className={styles.about_header_wrap}>
                <p style={{color:'#857F72', paddingBottom:'12px'}}>About us</p>
            <h2 style={{width:'80%', margin:'0 auto'}} >Empowering cannabis with high performance, powerful and innovative software.</h2>
            <p style={{width:'55%', paddingTop:'20px'}}>We build software for businesses that want to digitally connect to their customers while improving their business effiency and productivity.</p>
            <button className={styles.about_hero_button}>Connect with us</button>
            </motion.div>
            </div>
            <motion.div  initial={{y:100, opacity: 0}} whileInView={{y:0, opacity:1}} transition={{delay: .3, duration:.5}} className={styles.about_two}>
                <div className={styles.about_two_wrap}>
                   
                    <div className={styles.about_two_one}>
                        <BalanceIcon style={{fontSize:'40px', color:'#000', backgroundColor:'#51CA58', padding:'12px', fontSize:'58px', borderRadius:'10px', marginRight:'20px'}}/>
                        <div style={{display:'flex', flexDirection:'column'}}>
                        <p style={{paddingBottom:'12px', fontWeight:'500'}}>Authenticity</p>
                       
                     <p>Our team is driven by a shared commitment to truth and authenticity. what you see is what you get</p>
                     </div>
                        </div>
                        <div className={styles.about_two_two}>
                            <PsychologyIcon style={{fontSize:'40px', color:'#000', backgroundColor:'#51CA58', padding:'12px', fontSize:'58px', borderRadius:'10px', margin:'0 20px'}}/>
                            <div style={{display:'flex', flexDirection:'column'}}>
                            <p style={{paddingBottom:'12px', fontWeight:'500'}}>Functional Quality</p>
                            <p>we are dedicated to providing our clients with the most powerful and reliable software solutions available</p>
                            </div>
                    </div>
                    <div className={styles.about_two_three}>
                        <ScienceIcon style={{fontSize:'40px', color:'#000', backgroundColor:'#51CA58', padding:'12px', fontSize:'58px', borderRadius:'10px', margin:'0 20px'}}/>
                        <div  style={{display:'flex', flexDirection:'column'}}>
                        <p style={{paddingBottom:'12px', fontWeight:'500'}}>Innovation</p>
                        <p>we are committed to helping businesses in the industry achieve their full potential through the use of innovative software.</p>
                        </div>
                        </div>
                </div>
        </motion.div>
        </div>
    );
}

export default about;