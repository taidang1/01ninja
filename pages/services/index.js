import styles from "../../styles/Services.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HandshakeIcon from "@mui/icons-material/Handshake";
import GppGoodIcon from "@mui/icons-material/GppGood";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

const services = () => {
  return (
    <div className={styles.service_one}>
      <div className={styles.service_hero}>
        <motion.div    initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6, type: "spring" }} className={styles.service_hero_wrap}>
        <Image
          className={styles.service_hero_img}
          src="/service_hero_canna.png"
          alt="services"
          width={300}
          height={300}
          alt="services"
        />
        <div className={styles.service_hero_text}>
          <h2 style={{ paddingBottom: "12px" }}>
            Modern solutions to cannabis businesses
          </h2>
          <p>
            Stop wasting time with solutions that dont work. We prioritize
            working software
          </p>
          <div>
            <button className={styles.service_btn}> Get started now</button>
          </div>
        </div>
        </motion.div>
      </div>
      <div className={styles.service_overview}>
        <motion.div initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay:.2 }}  className={styles.service_overview_wrap}>
          <p style={{ fontWeight: "450", paddingBottom: "12px" }}>
            Our competitive software services
          </p>
          <h2>All in one place for your canna business</h2>
          <div className={styles.overview_wrap_one}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <HandshakeIcon
                style={{
                  fontSize: "40px",
                  color: "#51CA58",
                  backgroundColor: "#27241D",
                  padding: "12px",
                  fontSize: "58px",
                  borderRadius: "10px",
                  marginRight: "20px",
                }}
              />
              <div className={styles.overview_box_one}>
                <h3>Transparency</h3>
                <p>
                  we commit to being transparent in every aspect of our
                  operations, from our code to our business practices.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <GppGoodIcon
                style={{
                  fontSize: "40px",
                  color: "#51CA58",
                  backgroundColor: "#27241D",
                  padding: "12px",
                  fontSize: "58px",
                  borderRadius: "10px",
                  marginRight: "20px",
                }}
              />
              <div className={styles.overview_box_two}>
                <h3>Quality of code</h3>
                <p>
                  Custom code is developed specifically for your website or
                  application, so there's less risk of compatibility issues
                  arising.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.overview_wrap_two}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AcUnitIcon
                style={{
                  fontSize: "40px",
                  color: "#51CA58",
                  backgroundColor: "#27241D",
                  padding: "12px",
                  fontSize: "58px",
                  borderRadius: "10px",
                  marginRight: "20px",
                }}
              />
              <div className={styles.overview_box_three}>
                <h3>Not relying on third parties</h3>
                <p>
                  custom code is often the better choice for businesses and
                  organizations that require a high level of security,
                  flexibility, performance, and support.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <EmojiObjectsIcon
                style={{
                  fontSize: "40px",
                  color: "#51CA58",
                  backgroundColor: "#27241D",
                  padding: "12px",
                  fontSize: "58px",
                  borderRadius: "10px",
                  marginRight: "20px",
                }}
              />
              <div className={styles.overview_box_four}>
                <h3>Imagination is the limit</h3>
                <p>
                  have the ability to create unique features and capabilities
                  that are tailored specifically to your needs.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className={styles.service_brand} id="service_brand">
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className={styles.service_brand_wrapper}
        >
          <div className={styles.service_brand_text}>
            <h2>We help build your brand</h2>
            <p style={{ paddingTop: "12px" }}>
              We help you build your brand and grow your business. Dont settle
              for someone elses brand, make yours unique
            </p>
            <div
              style={{
               
                paddingTop: "12px",
                
              }}
            >
              <Link
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#51CA58",
                  fontWeight: "550",
                  textDecorationThickness: "3px",
                  textUnderlineOffset: "6px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                href="/services/brand"
              >
                <p style={{fontWeight:'500'}}>learn more</p>
                <ArrowForwardIosIcon
                  style={{ fontSize: "16px", marginLeft: "6px",marginTop:'3px' }}
                />
              </Link>
            </div>
          </div>
          <video
            className={styles.service_brand_video}
            style={{ width: "auto", height: "450px" }}
            source
            src="/service_brand.mp4"
            type="video/mp4"
            playsInline
            autoPlay
            loop
            muted
          ></video>
        </motion.div>
      </div>
      <div id="service_ecommerce" className={styles.service_ecommerce}>
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className={styles.service_ecommerce_wrap}
        >
          <img
            className={styles.service_ecommerce_img}
            src="service_cart.png"
            alt="ecommerce"
          />
          <div className={styles.service_ecommerce_text}>
            <h2>Sophisticated & scalable commerce</h2>
            <p style={{ paddingTop: "12px" }}>
              We offer a powerful and flexible e-commerce platform that provides
              a lot of features and customization options.
            </p>
            <div
              style={{
                
                paddingTop: "12px", paddingBottom:'20px',
              }}
            >
              <Link
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#51CA58",
                  fontWeight: "550",
                  textDecorationThickness: "3px",
                  textUnderlineOffset: "6px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                href="/services/ecommerce"
              >
                <p style={{fontWeight:'500'}}>learn more</p>
                <ArrowForwardIosIcon
                  style={{ fontSize: "16px", marginLeft: "6px",marginTop:'3px'  }}
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <div id="service_custom"  className={styles.service_custom}>
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className={styles.service_custom_wrap}
        >
          <div className={styles.service_custom_text}>
            <h2>Custom software development</h2>
            <p style={{ paddingTop: "12px" }}>
              have complete control over every aspect of your code. Fine-tuned
              code to meet specific requirements or optimize performance
            </p>
            <div
              style={{
                
                paddingTop: "12px", paddingBottom:'20px',
              }}
            >
              <Link
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#51CA58",
                  fontWeight: "550",
                  textDecorationThickness: "3px",
                  textUnderlineOffset: "6px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                href="/services/custom"
              >
                <p style={{fontWeight:'500'}}>learn more</p>
                <ArrowForwardIosIcon
                  style={{ fontSize: "16px", marginLeft: "6px",marginTop:'3px'  }}
                />
              </Link>
            </div>
          </div>
          <video
            className={styles.service_custom_video}
            style={{ width: "auto", height: "400px" }}
            source
            src="/service_three.mp4"
            type="video/mp4"
            playsInline
            autoPlay
            loop
            muted
          ></video>
        </motion.div>
      </div>
      <div id="service_cms"  className={styles.service_cms}>
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className={styles.service_cms_wrap}
        >
          <div className={styles.service_cms_text}>
            <h2>A content management system CMS</h2>
            <p style={{ paddingTop: "12px" }}>
              CMS software is designed to be user-friendly, with an intuitive
              interface that makes it easy for non-technical users to create and
              manage content. This means that users can focus on creating
              content, rather than worrying about the technical details of how
              to publish it.{" "}
            </p>
            <div
              style={{
      
                paddingTop: "12px",
              }}
            >
              <Link
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#51CA58",
                  fontWeight: "550",
                  textDecorationThickness: "3px",
                  textUnderlineOffset: "6px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                href="/services/cms"
              >
                <p style={{fontWeight:'500'}}>learn more</p>
                <ArrowForwardIosIcon
                  style={{ fontSize: "16px", marginLeft: "6px",marginTop:'3px' }}
                />
              </Link>
            </div>
          </div>
          <img
            className={styles.service_cms_img}
            src="service_cms.png"
            alt="cms"
          />
        </motion.div>
      </div>
      <div id="service_support"  className={styles.service_support}>
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className={styles.service_support_wrap}
        >
          <div className={styles.service_support_text}>
            <h2>Unlimited customer support & training</h2>
            <p style={{ paddingTop: "12px" }}>
              Always here for you, around the clock IT support! Faster response
              times and more immediate assistance
            </p>
            <div
              style={{
             
                paddingTop: "12px",
              }}
            >
              <Link
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#51CA58",
                  fontWeight: "550",
                  textDecorationThickness: "3px",
                  textUnderlineOffset: "6px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  
                }}
                href="/services/support"
              >
                <p>learn more</p>
                <ArrowForwardIosIcon
                  style={{ fontSize: "16px", marginLeft: "6px" }}
                />
              </Link>
            </div>
          </div>
          <video
            className={styles.service_support_video}
            style={{ width: "auto", height: "500px" }}
            source
            src="/service_support.mp4"
            type="video/mp4"
            playsInline
            autoPlay
            loop
            muted
          ></video>
        </motion.div>
      </div>
      <div id="service_anal" className={styles.service_analytics}>
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className={styles.service_analytics_wrap}
        >
          <img
            className={styles.service_analytics_img}
            src="service_analytics.png"
            alt="analytics"
          />
          <div className={styles.service_analytics_text}>
            <h2>Analytics & reporting</h2>
            <p style={{ paddingTop: "12px" }}>
              We provide you with the tools to track and analyze your website
              traffic and marketing campaigns. We also provide you with the
              tools to track and analyze your website traffic and marketing
              campaigns.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingTop: "20px",
              }}
            >
              <a
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#51CA58",
                  fontWeight: "550",
                  textDecorationThickness: "3px",
                  textUnderlineOffset: "6px",
                }}
              >
                Learn more
              </a>
              <ArrowForwardIosIcon
                style={{ fontSize: "16px", marginLeft: "12px" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default services;
