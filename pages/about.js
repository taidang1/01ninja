import styles from '../styles/About.module.css';



const about = () => {
    return (
        <div className={styles.about_section}>
            <div className={styles.about_header}>
                <p style={{color:'#857F72', paddingBottom:'12px'}}>About us</p>
            <h2 style={{width:'80%', margin:'0 auto'}} >Empowering cannabis with high performance, powerful and innovative software.</h2>
            <p style={{width:'55%', paddingTop:'20px'}}>We build software for businesses that want to digitally connect to their customers while improving their business effiency and productivity.</p>
            <button className={styles.about_hero_button}>Connect with us</button>
            </div>
            <div className={styles.about_two}>
                <div className={styles.about_two_wrap}>
                   
                    <div className={styles.about_two_one}>
                        <p>Authenticity</p>
                        </div>
                        <div className={styles.about_two_two}>
                            <p>Functional Quality</p>
                    </div>
                    <div className={styles.about_two_three}>
                        <p>Innovation</p>
                        </div>
                      
                </div>
        </div>
        </div>
    );
}

export default about;