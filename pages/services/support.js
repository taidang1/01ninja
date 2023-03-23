import styles from "../../styles/support.module.css";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";

const support = () => {
  return (
    <div className={styles.support_section}>
      <div className={styles.support_hero}>
        <div className={styles.support_hero_wrap}>
          <div className={styles.support_hero_text}>
            <h2 style={{ paddingBottom: "12px" }}>
              Ensuring our customers are taken care of, in person or remotely
            </h2>
            <p>
              Our support team is available to assist you with any questions or
              concerns you may have. We are here to help you get the most out of
              your software and ensure you are getting the most out of your
              investment.
            </p>
            <div>
              <button className={styles.support_hero_btn}>
                Contact us now
              </button>
            </div>
          </div>
          <video
            className={styles.support_hero_video}
            style={{ width: "auto", height: "420px", marginRight: "-30px" }}
            source
            src="/support_hero.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
      <div className={styles.support_two}>
        <div className={styles.support_two_title}>
          <h2 style={{paddingBottom:'12px'}}>
            Being there for our clients is the key to sustainable business
            practices.
          </h2>
          <p >
            Dont settle for outsourced customer support.Our dedicated locally
            based team of customer support experts puts us ahead.
          </p>
        </div>
        <div className={styles.support_two_wrap}>
          <div className={styles.support_two_box_one}>
            <HouseSidingIcon
              style={{
                fontSize: "58px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />
            <p>No outsourcing</p>
          </div>
          <div className={styles.support_two_box_two}>
            <SupportAgentIcon
              style={{
                fontSize: "58px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />
            <p>Dedicated support experts</p>
          </div>
          <div className={styles.support_two_box_three}>
            <LocalConvenienceStoreIcon
              style={{
                fontSize: "58px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />
            <p>Available 7 days a week</p>
          </div>
        </div>
      </div>
      <div className={styles.support_three}>
        <div className={styles.support_three_wrap}>
          <img
            className={styles.support_three_img}
            src="/support_three_img.png"
            alt="support_three"
          />
          <div className={styles.support_three_text}>
            <h2>Training your team our software, regardless of location</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default support;