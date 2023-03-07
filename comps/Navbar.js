import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { useState, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';


function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
 
  return(
   <Slide appear={false}  direction={"down"} in={!trigger}>
     {children}
   </Slide>
  );}

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

    return (
        <div className={styles.navhover}>
            <HideOnScroll>
        <nav       style={{
        background: `#E8E6E1`,
      
        boxShadow: `rgb(79 76 69/ ${boxShadow})  0px  10px 20px`,
      }}
 className={styles.navbar}>
          
            <div className={styles.content}>
                <div className={styles.logo}>
                    <Link href="/">
                    <img src="/ninjas_logo.png" style={{width:'40px', height:'auto'}} alt="logo" />
                    </Link> 
                    <p style={{fontWeight:'550', paddingLeft:'9px', color:'#51CA58', fontSize:'1.618em'}}>Canna.</p>  
                </div>
                <div  className={styles.link}>
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
                <button className={styles.btn}>
                    <Link style={{fontWeight:'550', display:'flex',alignItems:'center',}} href="/becomeapartner">Join Us <FavoriteIcon style={{ marginLeft:'4px'}}/></Link>
                </button>
            </div>
       
        </nav>
        </HideOnScroll>
        </div>
    );
}

export default Navbar;