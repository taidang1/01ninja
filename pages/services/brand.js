import styles from "../../styles/brand.module.css";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import LanguageIcon from "@mui/icons-material/Language";
import { motion } from "framer-motion";

const brand = () => {
  return (
    <div className={styles.brand_section}>
      <div className={styles.brand_hero}>
        <motion.div initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4 }} className={styles.brand_hero_wrap}>
          <video
          className={styles.brand_hero_video}
            style={{ width: "auto", height: "400px" }}
            source
            src="/branding_hero.mp4"
            autoPlay
            loop
            muted
          ></video>
          <div className={styles.brand_hero_text}>
            <h2 style={{ paddingBottom: "12px" }}>
              Native cannabis business branding
            </h2>
            <p>
        
              A website allows you to create a unique brand identity that
              reflects your values, mission, and personality. You can use custom
              design, colors, fonts, and content to establish a visual and
              emotional connection with your audience
            </p>
            <div>
              <button className={styles.brand_hero_btn}>
                Free consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay:.2 }} className={styles.brand_two}>
        <h2 className={styles.brand_two_title} style={{ textAlign: "center", padding: "60px 0" }}>
          Dont use third party iframes
        </h2>
        <p className={styles.brand_two_text} style={{ textAlign: "center", paddingBottom: "60px" }}>
          We help you build your brand and grow your business. Dont settle for
          someone elses brand, make yours unique
        </p>
        <div className={styles.brand_two_wrap}>
          <div className={styles.brand_two_box_one}>
            <AccountBalanceIcon
              style={{
                fontSize: "40px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                fontSize: "58px",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />
            <p style={{ paddingBottom: "12px", fontWeight: "500" }}>
              Credibility
            </p>
          </div>
          <div className={styles.brand_two_box_two}>
            <QueryStatsIcon
              style={{
                fontSize: "40px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                fontSize: "58px",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />
            <p style={{ paddingBottom: "12px", fontWeight: "500" }}>
              Marketing
            </p>
          </div>
          <div className={styles.brand_two_box_three}>
            <LanguageIcon
              style={{
                fontSize: "40px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                fontSize: "58px",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />
            <p style={{ paddingBottom: "12px", fontWeight: "500" }}>SEO</p>
          </div>
        </div>
      </motion.div>
      <div className={styles.brand_three}>
        <motion.div initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay:.2 }} className={styles.brand_three_wrap}>
          <div className={styles.brand_three_text}>
            <h2 style={{ paddingBottom: "20px" }}>
              Bringing your digital brand to life
            </h2>
            <p style={{ paddingBottom: "12px" }}>
              In house designers to implement your branding needs native to our
              technologies
            </p>
            <p>
              Our design team is at your service to craft a digital experience
              only unique to your brand
            </p>
          </div>
          <img
            className={styles.brand_three_img}
            src="/brand_custom.png"
            alt="brand"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default brand;
