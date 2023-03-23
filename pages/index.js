
import styles from "@/styles/Home.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Swiper, SwiperSlide } from "swiper/react";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import React, { useRef, useState } from "react";
import "swiper/css";
import ShopIcon from "@mui/icons-material/Shop";
import TuneIcon from "@mui/icons-material/Tune";
import "swiper/css/free-mode";
import { Autoplay, Pagination, Navigation, FreeMode, Grid } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import VideoSettingsIcon from "@mui/icons-material/VideoSettings";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import PaidIcon from "@mui/icons-material/Paid";
import "swiper/css/grid";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Link from "next/link";
import { motion } from "framer-motion";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled } from "@mui/material/styles";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#F86A6A",
  },
  "& .MuiRating-iconHover": {
    color: "#E12D39",
  },
});

export default function Home(props) {
  return (
    <section>
      <div className={styles.home_top}></div>
      <div className={styles.homepage}>
        <div className={styles.hero_backdrop}></div>
        <div className={styles.home_slogan}>
          <h1 style={{ color: "#FAF9F7", textAlign: "left" }}>
            Transforming ideas into solutions.
          </h1>
          <p
            style={{
              color: "#FAF9F7",
              fontSize: "18px",
              paddingTop: "12px",
              lineHeight: "1.2",
              paddingBottom: "12px",
              textAlign: "left",
            }}
          >
            Our team of experienced developers and designers are ready to help
            you build your next project.
          </p>
          <div className={styles.home_btn_group}>
            <Link href="/becomeapartner">
            <button
              style={{ display: "flex", alignItems: "center", color:'#1D1A13' }}
              className={styles.home_btn}
            >
              Contact us
              <PhoneCallbackIcon style={{ marginLeft: "4px", color:'#1D1A13' }} />
            </button>
            </Link>
            <Link href="/about">
            <button className={styles.home_btn2}>learn more</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.home2}>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4 }}
          className={styles.home2_wrap}
        >
          <div className={styles.home2_text}>
            <h2>Experience the power of software.</h2>

            <p style={{ padding: "10px 0" }}>
              Features like online ordering, loyalty programs, and personalized
              promotions help provide a better customer experience and increase
              sales.
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <a href="/services"
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
          <video
          className={styles.home2_video}
            
            source
            src="/home2_video.mp4"
            autoPlay
            loop
            muted
          ></video>
        </motion.div>
      </div>
      <div className={styles.home3}>
        <motion.div   initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4 }} className={styles.home3_wrap}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "60px",
              alignItems: "center",
            }}
          >
            <h2 style={{ textAlign: "left", color: "#FAF9F7" }}>Software &</h2>
            <h2 style={{ textAlign: "left", color: "#51CA58" }}>cannabis</h2>
            <p className={styles.home3_text}
              style={{
                textAlign: "left",
                color: "#FAF9F7",
                width: "30%",
                paddingTop: "12px",
              }}
            >
              A cannabis software automates inventory management, sales
              tracking, and reporting, streamlining business processes, and
              reducing the manual workload.
            </p>
          </div>
        
        <div className={styles.swiper_wrap}>
          <Swiper
          
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            style={{
              width: "95%",
          
            }}
            className={styles.home3_swiper}
          >
            <SwiperSlide
              style={{
                color: "#fff",
                backgroundColor: "#090600",
                borderRadius: "25px",
                boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
              }}
              className={styles.home3_slider}
            >
              <div className={styles.swiper_slide_content}>
                <div className={styles.swiper_slide_title}>
                  <AddBusinessIcon
                    style={{
                      color: "#27241D",
                      fontSize: "50px",
                      backgroundColor: "#C1F2C7",
                      padding: "6px",
                      borderRadius: "10px",
                    }}
                  />
                  <h3 style={{ color: "#51CA58" }}>Branding</h3>
                  <p style={{ color: "#fff" }}>
                    As a cannabis business grows, a software can easily scale
                    with the business.{" "}
                  </p>
                  <Link href="/services#service_brand" scroll={true}>
                    <button className={styles.learn_more_btn}>
                      learn more
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{
                color: "#fff",
                backgroundColor: "#000",
                borderRadius: "25px",
                boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
              }}
              className={styles.home3_slider}
            >
              <div className={styles.swiper_slide_content}>
                <div className={styles.swiper_slide_title}>
                  <ShopIcon
                    style={{
                      color: "#27241D",
                      fontSize: "50px",
                      backgroundColor: "#C1F2C7",
                      padding: "6px",
                      borderRadius: "10px",
                    }}
                  />
                  <h3 style={{ color: "#51CA58" }}>E-commerce</h3>
                  <p style={{ color: "#fff" }}>
                    As a cannabis business grows, a software can easily scale
                    with the business.{" "}
                  </p>
                  <Link href="/services#service_ecommerce" scroll={true}>
                  <button className={styles.learn_more_btn}>learn more</button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{
                color: "#fff",
                backgroundColor: "#000",
                borderRadius: "25px",
                boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
              }}
              className={styles.home3_slider}
            >
              <div className={styles.swiper_slide_content}>
                <div className={styles.swiper_slide_title}>
                  <TuneIcon
                    style={{
                      color: "#27241D",
                      fontSize: "50px",
                      backgroundColor: "#C1F2C7",
                      padding: "6px",
                      borderRadius: "10px",
                    }}
                  />
                  <h3 style={{ color: "#51CA58" }}>Custom</h3>
                  <p style={{ color: "#fff" }}>
                    As a cannabis business grows, a software can easily scale
                    with the business.{" "}
                  </p>
                  <Link href="/services#service_custom" scroll={true}>
                  <button className={styles.learn_more_btn}>learn more</button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{
                color: "#fff",
                backgroundColor: "#000",
                borderRadius: "25px",
                boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
              }}
              className={styles.home3_slider}
            >
              <div className={styles.swiper_slide_content}>
                <div className={styles.swiper_slide_title}>
                  <VolunteerActivismIcon
                    style={{
                      color: "#27241D",
                      fontSize: "50px",
                      backgroundColor: "#C1F2C7",
                      padding: "6px",
                      borderRadius: "10px",
                    }}
                  />
                  <h3 style={{ color: "#51CA58" }}>Hand-coded</h3>
                  <p style={{ color: "#fff" }}>
                    As a cannabis business grows, a software can easily scale
                    with the business.{" "}
                  </p>
                  <Link href="/services#service_custom" scroll={true}>
                  <button className={styles.learn_more_btn}>learn more</button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{
                color: "#fff",
                backgroundColor: "#000",
                borderRadius: "25px",
              }}
              className={styles.home3_slider}
            >
              <div className={styles.swiper_slide_content}>
                <div className={styles.swiper_slide_title}>
                  <VideoSettingsIcon
                    style={{
                      color: "#27241D",
                      fontSize: "50px",
                      backgroundColor: "#C1F2C7",
                      padding: "6px",
                      borderRadius: "10px",
                    }}
                  />
                  <h3 style={{ color: "#51CA58" }}>CMS</h3>
                  <p style={{ color: "#fff" }}>
                    As a cannabis business grows, a software can easily scale
                    with the business.{" "}
                  </p>
                  <Link href="/services#service_cms" scroll={true}>
                  <button className={styles.learn_more_btn}>learn more</button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{
                color: "#fff",
                backgroundColor: "#000",
                borderRadius: "25px",
              }}
              className={styles.home3_slider}
            >
              <div className={styles.swiper_slide_content}>
                <div className={styles.swiper_slide_title}>
                  <AnalyticsIcon
                    style={{
                      color: "#27241D",
                      fontSize: "50px",
                      backgroundColor: "#C1F2C7",
                      padding: "6px",
                      borderRadius: "10px",
                    }}
                  />
                  <h3 style={{ color: "#51CA58" }}>Analytics</h3>
                  <p style={{ color: "#fff" }}>
                    As a cannabis business grows, a software can easily scale
                    with the business.{" "}
                  </p>
                  <Link href="/services#service_anal" scroll={true}>
                  <button className={styles.learn_more_btn}>learn more</button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{
                color: "#fff",
                backgroundColor: "#000",
                borderRadius: "25px",
              }}
              className={styles.home3_slider}
            >
              <div className={styles.swiper_slide_content}>
                <div className={styles.swiper_slide_title}>
                  <PaidIcon
                    style={{
                      color: "#27241D",
                      fontSize: "50px",
                      backgroundColor: "#C1F2C7",
                      padding: "6px",
                      borderRadius: "10px",
                    }}
                  />
                  <h3 style={{ color: "#51CA58" }}>Payments</h3>
                  <p style={{ color: "#fff" }}>
                    As a cannabis business grows, a software can easily scale
                    with the business.{" "}
                  </p>
                  <Link href="/services#service_ecommerce" scroll={true}>
                  <button className={styles.learn_more_btn}>learn more</button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                color: "#fff",
                backgroundColor: "#000",
                borderRadius: "25px",
              }}
              className={styles.home3_slider}
            >
              <div className={styles.swiper_slide_content}>
                <div className={styles.swiper_slide_title}>
                  <AssuredWorkloadIcon
                    style={{
                      color: "#27241D",
                      fontSize: "50px",
                      backgroundColor: "#C1F2C7",
                      padding: "6px",
                      borderRadius: "10px",
                    }}
                  />
                  <h3 style={{ color: "#51CA58" }}>Training</h3>
                  <p style={{ color: "#fff" }}>
                    As a cannabis business grows, a software can easily scale
                    with the business.{" "}
                  </p>
                  <Link href="/services#service_support" scroll={true}>
                  <button className={styles.learn_more_btn}>learn more</button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                color: "#fff",
                backgroundColor: "#000",
                borderRadius: "25px",
              }}
              className={styles.home3_slider}
            >
              <div className={styles.swiper_slide_content}>
                <div className={styles.swiper_slide_title}>
                  <SupportAgentIcon
                    style={{
                      color: "#27241D",
                      fontSize: "50px",
                      backgroundColor: "#C1F2C7",
                      padding: "6px",
                      borderRadius: "10px",
                    }}
                  />
                  <h3 style={{ color: "#51CA58" }}>Unlimited support</h3>
                  <p style={{ color: "#fff" }}>
                    As a cannabis business grows, a software can easily scale
                    with the business.{" "}
                  </p>
                  <Link href="/services#service_support" scroll={true}>
                  <button className={styles.learn_more_btn}>learn more</button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        </motion.div>
      </div>
      <div className={styles.home4}>
        <motion.div   initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4 }} className={styles.home4_wrap}>
        <div className={styles.home4_swiper_wrap} style={{ borderRadius: "25px", width: "500px", margin: "20px" }}>
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 9500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            style={{ borderRadius: "25px" }}
            className={styles.home4_swiper}
          >
            <SwiperSlide className={styles.home4_slider} style={{ borderRadius: "25px" }}>
              <div className={styles.swiper_backdrop}></div>

              <img
                className={styles.swiper_slide_image}
                src="software_one.png"
              />
              <div className={styles.software_img_text}>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "500",
                    textShadow: ".1em .1em .1em #000",
                    color: "#FAF9F7",
                  }}
                >
                  "software to automate tasks and improve processes can see
                  productivity gains of up to 30%"
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.home4_slider} style={{ borderRadius: "25px" }}>
              <div className={styles.swiper_backdrop}></div>
              <img
                className={styles.swiper_slide_image}
                src="software_two.png"
              />
              <div className={styles.software_img_text}>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "500",
                    textShadow: ".1em .1em .1em #000",
                    color: "#FAF9F7",
                  }}
                >
                  "businesses that use software to enable digital transformation
                  can see revenue growth of up to 34%"
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.home4_slider} style={{ borderRadius: "25px" }}>
              <div className={styles.swiper_backdrop}></div>
              <img
                className={styles.swiper_slide_image}
                src="software_three.png"
              />
              <div className={styles.software_img_text}>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "500",
                    textShadow: ".1em .1em .1em #000",
                    color: "#FAF9F7",
                  }}
                >
                  "software to analyze data can make more informed decisions,
                  resulting in a 10% increase in ROI"
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.home4_slider} style={{ borderRadius: "25px" }}>
              <div className={styles.swiper_backdrop}></div>
              <img
                className={styles.swiper_slide_image}
                src="software_four.png"
              />
              <div className={styles.software_img_text}>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "500",
                    textShadow: ".1em .1em .1em #000",
                    color: "#FAF9F7",
                  }}
                >
                  "businesses that use software to personalize the customer
                  experience can see a 15% increase in customer satisfaction"
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.home4_text}>
          <h2>Software helps your cannabis business.</h2>
          <p style={{ paddingTop: "12px", paddingBottom: "20px" }}>
            Managing a cannabis business can be complex and time-consuming, with
            multiple tasks to handle, such as inventory management, sales
            tracking and customer data.
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <a
            href="/services"
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
      <div className={styles.home_tech}>
        <motion.div initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay:.4 }} className={styles.home_tech_wrap}>
        <h2 style={{paddingBottom:'20px'}}>tech leveraged</h2>
        <Swiper
          slidesPerView={'auto'}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
       
          modules={[Grid]}
          className={styles.swiper_tech}
        >
          <SwiperSlide className={styles.swiper_slider_tech}>
            <div className={styles.swipe_tech_wrap}>
              <img
                className={styles.tech_img}
                src="mongodb_icon.png"
                alt="mongo"
              />
              <p>MongoDB</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider_tech}>
            <div className={styles.swipe_tech_wrap}>
              <img
                className={styles.tech_img}
                src="aws_ec2.png"
                alt="aws ec2"
              />
              <p>Aws Ec2</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider_tech}>
            <div className={styles.swipe_tech_wrap}>
              <img className={styles.tech_img} src="aws_icon.png" alt="aws " />
              <p>AWS</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider_tech}>
            Slide 4
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider_tech}>
            <div className={styles.swipe_tech_wrap}>
              <img className={styles.tech_img} src="nextjs.png" alt="next js" />
              <p>Next Js</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider_tech}>
            Slide 6
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider_tech}>
            <div className={styles.swipe_tech_wrap}>
              <img
                className={styles.tech_img}
                src="js_icon.png"
                alt="next js"
              />
              <p>JavaScript</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider_tech}>
            Slide 8
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider_tech}>
            <div className={styles.swipe_tech_wrap}>
              <img
                className={styles.tech_img}
                src="medusajs_icon.png"
                alt="next js"
              />
              <p>Medusa Js</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider_tech}>
            Slide 9
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider_tech}>
            <div className={styles.swipe_tech_wrap}>
              <img
                className={styles.tech_img}
                src="react_icon.svg"
                alt="next js"
              />
              <p>React Js</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider_tech}>
            Slide 9
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider_tech}>
            <div className={styles.swipe_tech_wrap}>
              <img
                className={styles.tech_img}
                src="openai_icon.png"
                alt="next js"
              />
              <p>Open AI</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider_tech}>
            Slide 9
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider_tech}>
            Slide 9
          </SwiperSlide>
        </Swiper>

        <div style={{ display: "flex", alignItems: "center" }}>
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
        </motion.div>
      </div>
      <div className={styles.home5}>
        <motion.div className={styles.home5_wrap} initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay:.2 }} >
        <div className={styles.home5_text}>
          <h2 style={{ textAlign: "left" }}>What customers say about us!</h2>
        </div>
        <Swiper
          Pagination={false}
          slidesPerView={'auto'}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className={styles.swiper_five}
        >
          <SwiperSlide className={styles.swiper_slider_five}>
            <div className={styles.slider_five_wrap}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingBottom: "6px",
                }}
              >
                <AccountCircleIcon
                  style={{
                    fontSize: "40px",
                    color: "#51CA58",
                    fontSize: "38px",
                  }}
                />
                <p style={{ paddingLeft: "6px", fontWeight: "500" }}>
                  Lily Chen
                </p>
              </div>
              <StyledRating
                size="small"
                name="customized-color"
                defaultValue={5}
                getLabelText={(value) =>
                  `${value} Heart${value !== 1 ? "s" : ""}`
                }
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
              />
              <p style={{ paddingTop: "12px", textAlign: "left" }}>
                "I've been using this software for my dispensary for a few
                months now, and it's been a game-changer. The inventory
                management system is incredibly easy to use and has helped us
                keep track of our orders."
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider_five}>
            <div className={styles.slider_five_wrap}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingBottom: "6px",
                }}
              >
                <AccountCircleIcon
                  style={{
                    fontSize: "40px",
                    color: "#51CA58",
                    fontSize: "38px",
                  }}
                />
                <p style={{ paddingLeft: "12px", fontWeight: "500" }}>
                  Marcus Rivera
                </p>
              </div>
              <StyledRating
                size="small"
                name="customized-color"
                defaultValue={5}
                getLabelText={(value) =>
                  `${value} Heart${value !== 1 ? "s" : ""}`
                }
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
              />
              <p style={{ paddingTop: "12px", textAlign: "left" }}>
                "I was looking for a software solution that would help me manage
                my operations more efficiently. This software has been a godsend
                - the reporting and analytics tools are top-notch, and I can
                easily track everything"
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider_five}>
            <div className={styles.slider_five_wrap}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingBottom: "6px",
                }}
              >
                <AccountCircleIcon
                  style={{
                    fontSize: "40px",
                    color: "#51CA58",
                    fontSize: "38px",
                  }}
                />
                <p style={{ paddingLeft: "12px", fontWeight: "500" }}>
                  Sadie Jackson
                </p>
              </div>
              <StyledRating
                size="small"
                name="customized-color"
                defaultValue={5}
                getLabelText={(value) =>
                  `${value} Heart${value !== 1 ? "s" : ""}`
                }
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
              />

              <p style={{ paddingTop: "12px", textAlign: "left" }}>
                "I've tried a few different cannabis software solutions in the
                past, but this one stands out for its ease of use and customer
                support. Whenever I have a question or issue, the support team
                is quick to respond and always helpful."
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider_five}>
            <div className={styles.slider_five_wrap}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingBottom: "6px",
                }}
              >
                <AccountCircleIcon
                  style={{
                    fontSize: "40px",
                    color: "#51CA58",
                    fontSize: "38px",
                  }}
                />
                <p style={{ paddingLeft: "12px", fontWeight: "500" }}>
                  Victor Nguyen
                </p>
              </div>
              <StyledRating
                size="small"
                name="customized-color"
                defaultValue={5}
                getLabelText={(value) =>
                  `${value} Heart${value !== 1 ? "s" : ""}`
                }
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
              />
              <p style={{ paddingTop: "12px", textAlign: "left" }}>
                "If you're running a cannabis business, you need this software.
                They've helped me reach new customers and grow my brand in ways
                I never thought possible. 10/10!"
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider_five}>
            <div className={styles.slider_five_wrap}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingBottom: "6px",
                }}
              >
                <AccountCircleIcon
                  style={{
                    fontSize: "40px",
                    color: "#51CA58",
                    fontSize: "38px",
                  }}
                />
                <p style={{ paddingLeft: "12px", fontWeight: "500" }}>
                  Maya Patel
                </p>
              </div>
              <StyledRating
                size="small"
                name="customized-color"
                defaultValue={5}
                getLabelText={(value) =>
                  `${value} Heart${value !== 1 ? "s" : ""}`
                }
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
              />
              <p style={{ paddingTop: "12px", textAlign: "left" }}>
                "This software has helped me take my dispensary to the next
                level. The inventory management system is a lifesaver, and the
                reporting and analytics tools have given me invaluable insights
                into my business"
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
      </div>
      <div className={styles.home6}>
        <h2>View our live demo! </h2>
        <button className={styles.demo_btn}>
          View demo
          <PlayArrowIcon />
        </button>
      </div>
    </section>
  );
}
