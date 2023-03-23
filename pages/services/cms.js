import styles from "../../styles/cms.module.css";
import ExtensionIcon from "@mui/icons-material/Extension";
import CompareIcon from "@mui/icons-material/Compare";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import GTranslateIcon from '@mui/icons-material/GTranslate';
import CloudSyncIcon from '@mui/icons-material/CloudSync';

const cms = () => {
  return (
    <div className={styles.cms_section}>
      <div className={styles.cms_hero}>
        <div className={styles.cms_hero_wrap}>
          <img className={styles.cms_hero_img} src="/cms_hero.png" />
          <div className={styles.cms_hero_text}>
            <h2 style={{ paddingBottom: "12px" }}>
              Our next generation content management system
            </h2>
            <p>
              Tired of waiting to make digital content changes? Our CMS makes
              you fast! Rapidly testyour ideas, launch campaigns and get more
              work done in less time.
            </p>
            <div>
              <button className={styles.cms_hero_btn}>Get started now</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cms_two}>
        <div className={styles.cms_two_title}>
          <h2>How our CMS works...</h2>
          <p>
            Add content and implement ideas on your time. No waiting for turn
            around times!
          </p>
        </div>
        <div className={styles.cms_two_wrap}>
          <div className={styles.cms_box_one}>
            <ExtensionIcon
              style={{
                fontSize: "58px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />
            <p style={{ paddingBottom: "10px", fontWeight: "500" }}>
              Pre-built components
            </p>
            <p>
              Our development team pre-builds custom compentents into your apps.
            </p>
          </div>
          <div className={styles.cms_box_two}>
            <CompareIcon
              style={{
                fontSize: "58px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />
            <p style={{ paddingBottom: "10px", fontWeight: "500" }}>
              Custom components
            </p>
            <p>
              You can instruct our development team on which compents you would
              like to edit.
            </p>
          </div>
          <div className={styles.cms_box_three}>
            <AdminPanelSettingsIcon
              style={{
                fontSize: "58px",
                color: "#000",
                backgroundColor: "#51CA58",
                padding: "12px",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />
            <p style={{ paddingBottom: "10px", fontWeight: "500" }}>
              Add your content
            </p>
            <p>
              Your customizable admin page allows your to change your content
              whenever you like.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.cms_three}>
        <div className={styles.cms_three_wrap}>
          <div className={styles.cms_three_text}>
            <h2>Admin & inventory digital store CMS</h2>
            <p>
              Manage your ecommerce stack, product orders, customers, payments
              and much more
            </p>
            <p>
              Customize your databases, subscriptions and business automations
            </p>
          </div>
          <img className={styles.cms_three_img} src="/service_cms.png" />
        </div>
      </div>
      <div className={styles.cms_four}>
        <div className={styles.cms_four_wrap}>
          <div className={styles.cms_four_title}>
            <h2>What features does our CMS have?</h2>
            <p className={styles.cms_four_text}>
              Pretty much everything to let you comfortably create and publish
              content
            </p>
          </div>
         
            <div className={styles.cms_four_row_one}>
              <div className={styles.cms_four_row_one_box_one}>
                <div style={{ marginRight: "20px" }}>
                  <AppRegistrationIcon
                    style={{
                      fontSize: "58px",
                      color: "#31B237",
                      backgroundColor: "#C1F2C7",
                      padding: "12px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div>
                  <p>Convenient editor</p>
                  <p>
                    Adding content to our cms is clear and intuitive, you'll
                    become a pro user in 2 minutes.
                  </p>
                </div>
              </div>
              <div className={styles.cms_four_row_one_box_two}>
                <div style={{ marginRight: "20px" }}>
                  <AddToPhotosIcon
                    style={{
                      fontSize: "58px",
                      color: "#2186EB",
                      backgroundColor: "#BAE3FF",
                      padding: "12px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div>
                  <p>Add more sections</p>
                  <p>
                    Add more sections to your pre-built pages. Make new section
                    layouts from scratch.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.cms_four_row_two}>
              <div className={styles.cms_four_row_two_box_one}>
                <div style={{ marginRight: "20px" }}>
                  <AddModeratorIcon
                    style={{
                      fontSize: "58px",
                      color: "#9446ED",
                      backgroundColor: "#DAC4FF",
                      padding: "12px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div>
                  <p>Convenient editor</p>
                  <p>
                    Adding content to our cms is clear and intuitive, you'll
                    become a pro user in 2 minutes.
                  </p>
                </div>
              </div>
              <div className={styles.cms_four_row_two_box_two}>
                <div style={{ marginRight: "20px" }}>
                  <PermMediaIcon
                    style={{
                      fontSize: "58px",
                      color: "#E12D39",
                      backgroundColor: "#FFBDBD",
                      padding: "12px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div>
                  <p>Convenient editor</p>
                  <p>
                    Adding content to our cms is clear and intuitive, you'll
                    become a pro user in 2 minutes.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.cms_four_row_three}>
              <div className={styles.cms_four_row_three_box_one}>
                <div style={{ marginRight: "20px" }}>
                  <GTranslateIcon
                    style={{
                      fontSize: "58px",
                      color: "#31B237",
                      backgroundColor: "#C1F2C7",
                      padding: "12px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div>
                  <p>Convenient editor</p>
                  <p>
                    Adding content to our cms is clear and intuitive, you'll
                    become a pro user in 2 minutes.
                  </p>
                </div>
              </div>

              <div className={styles.cms_four_row_three_box_two}>
                <div style={{ marginRight: "20px" }}>
                  <CloudSyncIcon
                    style={{
                      fontSize: "58px",
                      color: "#2186EB",
                      backgroundColor: "#BAE3FF",
                      padding: "12px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div>
                  <p>Convenient editor</p>
                  <p>
                    Adding content to our cms is clear and intuitive, you'll
                    become a pro user in 2 minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};
export default cms;
