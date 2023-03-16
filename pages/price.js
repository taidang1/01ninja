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
            <div className={styles.price_overview}>
                <div className={styles.price_overview_wrap}>
                    <video className={styles.price_overview_video} source src="/price_steps.mp4" autoPlay loop muted></video>
                    <div className={styles.price_overview_text}>
                        <h2 style={{paddingBottom:'20px'}}>Starting at <span style={{color:'#31B237', fontWeight:'600'}}>$0 </span>down, <span style={{color:'#31B237', fontWeight:'600'}}>$249</span> per month.</h2>
                        <p style={{paddingBottom:'20px'}}>No page builders or third party iframes. We offer quality hand coded cannabis software solutions with superior results starting only at $249/mo</p>
                        <p>Need something tailored to your needs?! We can create custom software solutions, pricing would depend on scope of work and time involved.</p>
                        </div>
                        </div>
            </div>
            <div className={styles.price_est}>
                <div className={styles.price_est_text}>
        <h2 style={{paddingBottom:'20px'}}>Our pricing estimates</h2>
        <p>We offer competitive pricing for all types of cannabis businesses to open the doors of digital opportunities</p>
        </div>
            <div className={styles.pricing_wrap}>
                <div className={styles.price_box_one}>
            <div className={styles.box_one_price}>
        <p>Basic</p>
        <h2>249<span style={{fontSize:'16px', fontWeight:'400'}}>/mo</span></h2>
        <button className={styles.price_call} >Book a call</button>
            </div>
            <div className={styles.box_one_features}>
            <ul >
                <li >Free expert consultation</li>
                <li >Upto 10 custom designed inner pages</li>
                <li >In house branding and logo design implementation</li>
                <li>Copyrighting for content text optimization</li>
                <li>SEO optimized speeds and google results indexing</li>
                <li>Free hosting, SSL certification and personalized domain integration</li>
                <li>CMS content management system to manually customize your content</li>
                <li>Site analytics, see your web traffic and customer activity</li>
                <li>Database for customer forms and signup/login</li>
                <li>Free 24/7 support upto 6 months</li>
                <li>100% ownership after 6 months</li>
                <li>live chatebot</li>
                <li>social media integration</li>

            </ul>
                </div>
                </div>
                <div className={styles.price_box_two}>
<div className={styles.box_two_price}>
<p>Full service</p>
<h2>499<span style={{fontSize:'16px', fontWeight:'400'}}>/mo</span></h2>
<button className={styles.price_call}>Book a call</button>
</div>
<div className={styles.box_two_features}>
<ul >
    <li >Everything offered with basic tier and more</li>
    <li >Upto 20 custom designed inner pages</li>
    <li >In house branding and logo design implementation</li>
    <li>Copyrighting for content text optimization</li>
    <li>Full ecommerce functionality, upto 100 items</li>
    <li>Sophisticated database system keeping track of all site and customer data</li>
    <li>Cart checkout system</li>
    <li>Payment processing integration</li>
        <li>Customer personal user login analytics and order history</li>
        <li>All our ecommerce features available</li>
        <li>Product filtering system</li>
        <li>Product reviews and ratings</li>

    </ul>
</div>
                </div>
                <div className={styles.price_box_three}>
<div className={styles.box_three_price}>
<p>Custom</p>
<h2>XXX<span style={{fontSize:'16px', fontWeight:'400'}}>/mo</span></h2>
<button className={styles.price_call} >Book a call</button>
</div>

</div>
                </div>
<p style={{textAlign:'center', paddingTop:'20px', fontSize:'14px',color:'#423D33'}}>* pricing estimates can change depending on add ons and additional services needed</p>

            </div>
            <div className={styles.techstack_redirect}>
                <div className={styles.techstack_redirect_wrap}>
                    <div className={styles.techstack_redirect_text}>
                        <h2>Have more questions on our pricing or want a personalized quote from our finacial experts</h2>
                        </div>
                        <div>
                            <button className={styles.techstack_redirect_btn}>Get started now</button>
                        </div>
                        </div>
            </div>
        </div>
    );
}

export default price;