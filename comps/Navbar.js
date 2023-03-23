import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = (props) => {
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);

  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let boxShadowVar = backgroundTransparacyVar * 1;
      setBackgroundTransparacy(backgroundTransparacyVar);

      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className={styles.navhover}>
      <HideOnScroll>
        <nav
          style={{
            background: `#E8E6E1`,

            boxShadow: `rgb(79 76 69/ ${boxShadow})  0px  10px 20px`,
          }}
          className={styles.navbar}
        >
          <div className={styles.content}>
            <div className={styles.logo}>
              <Link href="/">
                <img
                  src="/ninjas_logo.png"
                  style={{ width: "40px", height: "auto" }}
                  alt="logo"
                />
              </Link>
              <p
                style={{
                  fontWeight: "550",
                  paddingLeft: "9px",
                  color: "#51CA58",
                  fontSize: "1.618em",
                }}
              >
                Canna.
              </p>
            </div>
            <div className={styles.link}>
              <div className={styles.singlelink}>
                <Link href="/about">About</Link>
              </div>
              <div className={styles.singlelink}>
                <Link href="/services">Services</Link>
              </div>
              <div className={styles.singlelink}>
                <Link href="/price">Pricing</Link>
              </div>
              <div className={styles.singlelink}>
                <Link href="/about">Demo</Link>
              </div>
            </div>
            <div onClick={handleShow} className={styles.nav_menu}>
              <button className={styles.nav_menu_btn}>
                <MenuIcon style={{ fontSize: "28px", color:'#27241D' }} />
              </button>
            </div>
            <AnimatePresence>
              {show && (
                <motion.div
                  initial={{ x: 500 }}
                  transition={{ duration: 0.5, type: "tween", delay: 0.3 }}
                  animate={{
                    x: 0,
                  }}
                  exit={{ x: 500 }}
                  className={styles.mobile_links}
                >
                  <div className={styles.mobile_links_wrap}>
                    <div  style={{marginTop:'20px'}}>
                      <button className={styles.nav_close} onClick={handleShow}><CloseIcon/></button>
                    </div>
                    <div
                      onClick={handleShow}
                      className={styles.mobile_singlelink}
                    >
                      <Link href="/about">About</Link>
                    </div>
                    <div
                      onClick={handleShow}
                      className={styles.mobile_singlelink}
                    >
                      <Link href="/services">Services</Link>
                    </div>
                    <div
                      onClick={handleShow}
                      className={styles.mobile_singlelink}
                    >
                      <Link href="/price">Pricing</Link>
                    </div>
                    <div
                      onClick={handleShow}
                      className={styles.mobile_singlelink}
                    >
                      <Link href="/about">Demo</Link>
                    </div>
                    <div>
                      <button onClick={handleShow} className={styles.btn_mobile}>
                        <Link
                          style={{
                            fontWeight: "550",
                            display: "flex",
                            alignItems: "center",
                          }}
                          href="/becomeapartner"
                        >
                          Join Us <FavoriteIcon style={{ marginLeft: "4px", color:'#27241D' }} />
                        </Link>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <button className={styles.btn}  >
              <Link
              
                style={{
                  fontWeight: "550",
                  display: "flex",
                  alignItems: "center",
                }}
                href="/becomeapartner"
              >
                Join Us <FavoriteIcon style={{ marginLeft: "4px", color:'#27241D' }} />
              </Link>
            </button>
          </div>
        </nav>
      </HideOnScroll>
    </div>
  );
};

export default Navbar;
