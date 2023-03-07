import styles from '../styles/Services.module.css';



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

            </div>
            
        </div>
    );
}

export default services;