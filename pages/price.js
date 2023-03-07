import styles from '../styles/Price.module.css';




const price = () => {
    return (
        <div className={styles.price_one}>
            <div className={styles.price_hero}>
                <div className={styles.price_hero_text}>
            <h2>Pricing estimates</h2>
            <p style={{paddingTop:'12px'}}>Our pricing is based on the complexity of your project. We offer a free consultation to discuss your project and provide a quote.</p>
            <div className={styles.price_btn_wrap}>
            <button className={styles.price_btn}>Get started now</button>
            </div>
            </div>
            <img className={styles.price_hero_img} src="pricing_hero.png" alt="price" />
            </div>
            <div className={styles.pricing_wrap}>

                <div className={styles.price_box_one}>
            <div className={styles.box_one_price}>
        <p>Basic</p>
        <h2>249-</h2>
        <button className={styles.price_call} >Book a call</button>
            </div>
            <ul >
                <li >1 hour call</li>
            </ul>
                </div>
                <div className={styles.price_box_two}>
<div className={styles.box_two_price}>
<p>Full service</p>
<h2>499-</h2>
<button className={styles.price_call}>Book a call</button>
</div>
                </div>
                <div className={styles.price_box_three}>
<div className={styles.box_three_price}>
<p>Custom</p>
<h2>XXX-</h2>
<button className={styles.price_call} >Book a call</button>
</div>
                </div>

            </div>
            <div className={styles.techstack_redirect}></div>
        </div>
    );
}

export default price;