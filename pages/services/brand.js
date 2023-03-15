import styles from '../../styles/brand.module.css';

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
                <h2 style={{textAlign:'center'}}>Dont use third party iframes</h2>
                <div className={styles.brand_two_wrap}>
                    <div className={styles.brand_two_box_one}>
                    <p style={{paddingBottom:'12px', fontWeight:'500'}}>Credibility</p>
                    </div>
                    <div className={styles.brand_two_box_two}>
                    <p style={{paddingBottom:'12px', fontWeight:'500'}}>Marketing</p>
                        </div>
                        <div className={styles.brand_two_box_three}>
                        <p style={{paddingBottom:'12px', fontWeight:'500'}}>SEO</p>
                            </div>
                    </div>

            </div>
        </div>
    );
}

export default brand;