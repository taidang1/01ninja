import styles from "../styles/About.module.css";
import BalanceIcon from "@mui/icons-material/Balance";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ScienceIcon from "@mui/icons-material/Science";
import { motion } from "framer-motion";
import Image from "next/image";

const about = () => {
  return (
    <div className={styles.about_section}>
      <div className={styles.about_header}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5, type: "spring" }}
          className={styles.about_header_wrap}
        >
          <p style={{ color: "#857F72", paddingBottom: "12px" }}>About us</p>
          <h2 className={styles.about_header_title} style={{ width: "80%", margin: "0 auto" }}>
            Empowering cannabis with high performance, powerful and innovative
            software.
          </h2>
          <p className={styles.about_header_p} style={{ width: "55%", paddingTop: "20px", fontSize: "1.1em" }}>
            We build software for businesses that want to digitally connect to
            their customers while improving their business effiency and
            productivity.
          </p>
          <button className={styles.about_hero_button}>Connect with us</button>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className={styles.about_two}
      >
        <div className={styles.about_two_wrap}>
          <div className={styles.about_two_one}>
            <BalanceIcon
              style={{
                fontSize: "40px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                fontSize: "58px",
                borderRadius: "10px",
                marginRight: "20px",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  paddingBottom: "12px",
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                Authenticity
              </p>

              <p styles={{}}>
                Our team is driven by a shared commitment to truth and
                authenticity. what you see is what you get
              </p>
            </div>
          </div>
          <div className={styles.about_two_two}>
            <PsychologyIcon
              style={{
                fontSize: "40px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                fontSize: "58px",
                borderRadius: "10px",
                marginRight: "20px",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ paddingBottom: "12px", fontWeight: "500" }}>
                Functional Quality
              </p>
              <p>
                we are dedicated to providing our clients with the most powerful
                and reliable software solutions available
              </p>
            </div>
          </div>
          <div className={styles.about_two_three}>
            <ScienceIcon
              style={{
                fontSize: "40px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                fontSize: "58px",
                borderRadius: "10px",
                marginRight: "20px",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ paddingBottom: "12px", fontWeight: "500" }}>
                Innovation
              </p>
              <p>
                we are committed to helping businesses in the industry achieve
                their full potential through the use of innovative software.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className={styles.about_us}>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.7, type: "spring" }}
          style={{
            paddingBottom: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ paddingBottom: "12px" }}>Who we are...</h2>
          <p>
            Our story is one of passion and purpose, founded on a mission to
            make a difference.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={styles.about_us_wrap}
        >
          <div className={styles.about_us_text}>
            <p style={{ fontSize: "16px", paddingBottom: "12px" }}>
         
              Our story stared with our passion for software and cannabis. Our
              goal is to bridge the gap between software and cannabis, providing
              innovative solutions that help the industry thrive.
            </p>
            <p style={{ paddingBottom: "12px" }}>
              We believe in collaboration, transparency, and exceeding
              expectations. We partner with like-minded businesses, empowering
              each other with cutting-edge software to create a community that
              delivers exceptional service and results.
            </p>
            <p>
              We believe that technology can be a powerful enabler of success,
              and we are committed to leveraging the latest advancements in
              software development to help our clients achieve their goals. Our
              vision is to create a world where businesses can seamlessly
              integrate software into their operations, empowering them to make
              data-driven decisions and stay ahead of the competition.
            </p>
          </div>
          <Image width={300} height={300}
            className={styles.about_us_img}
            src="/about_us.png"
            alt="about us now"
          />
        </motion.div>
      </div>
      <div className={styles.about_custom}>
        <div className={styles.about_custom_wrap}>
          <div className={styles.about_custom_text}></div>
        </div>
      </div>
      <div className={styles.about_banner}>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className={styles.about_banner_wrap}
        >
          <h2 className={styles.banner_text} style={{ width: "50%" }}>
            Interested in learning more? Want to join our team?!
          </h2>
          <button className={styles.about_banner_button}>
            Connect with us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default about;
