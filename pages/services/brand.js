import styles from '../../styles/brand.module.css';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import LanguageIcon from '@mui/icons-material/Language';

const brand = () => {
    return (
        <div className={styles.brand_section}>
            <div className={styles.brand_hero}>
                <div className={styles.brand_hero_wrap}>
                <video style={{width:'auto', height:'400px', }} source src="/branding_hero.mp4" autoPlay loop muted></video>
                <div className={styles.brand_hero_text}>
                    <h2 style={{paddingBottom:'12px'}}>Native cannabis business branding</h2>
                    <p> A website allows you to create a unique brand identity that reflects your values, mission, and personality. You can use custom design, colors, fonts, and content to establish a visual and emotional connection with your audience</p>
                    <div>
                    <button className={styles.brand_hero_btn} >Free consultation</button>
                    </div>
                </div>
                </div>

            </div>
            <div className={styles.brand_two}>
                <h2 style={{textAlign:'center', padding:'60px 0'}}>Dont use third party iframes</h2>
                <p style={{textAlign:'center', paddingBottom:'60px'}}>We help you build your brand and grow your business. Dont settle for someone elses brand, make yours unique</p>
                <div className={styles.brand_two_wrap}>
                    <div className={styles.brand_two_box_one}>
                        <AccountBalanceIcon  style={{fontSize:'40px', color:'#000', backgroundColor:'#51CA58', padding:'12px', fontSize:'58px', borderRadius:'10px', marginBottom:'12px'}}/>
                    <p style={{paddingBottom:'12px', fontWeight:'500'}}>Credibility</p>
                    </div>
                    <div className={styles.brand_two_box_two}>
                        <QueryStatsIcon style={{fontSize:'40px', color:'#000', backgroundColor:'#51CA58', padding:'12px', fontSize:'58px', borderRadius:'10px', marginBottom:'12px'}}/>
                    <p style={{paddingBottom:'12px', fontWeight:'500'}}>Marketing</p>
                        </div>
                        <div className={styles.brand_two_box_three}>
                            <LanguageIcon style={{fontSize:'40px', color:'#000', backgroundColor:'#51CA58', padding:'12px', fontSize:'58px', borderRadius:'10px', marginBottom:'12px'}}/>
                        <p style={{paddingBottom:'12px', fontWeight:'500'}}>SEO</p>
                            </div>
                    </div>

            </div>
        </div>
    );
}

export default brand;