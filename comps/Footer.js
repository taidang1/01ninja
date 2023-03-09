import styles from '../styles/Footer.module.css';
import { useEffect, useState } from 'react'
import { useFirestore } from '../hooks/useFirestore'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Footer = () => {
    const [email, setEmail] = useState('')

    const { addDocument, response } = useFirestore('emailForPromotions')

    const handleSubmit = (e) => {
        e.preventDefault()
        addDocument({
            email
        })
        setEmail('')
    }

    // useEffect(() => {
    //     if (response.success) {
    //         console.log('ok')
    //         setEmail('')
    //     }
    // }, [response.success])

    return (
        <div className={styles.footer}>
            <div className={styles.footer_ninjas}>
            <img src="/ninjas_logo.png" style={{width:'40px', height:'auto'}} alt="logo" />
            <p style={{paddingLeft:'6px', color:'#51CA58', fontWeight:'450', fontSize:'1.618em'}}>Canna.</p>
           {/* <p style={{color:'#E8E6E1', paddingTop:'9px', paddingLeft:'6px'}}>01ninjas.com</p>*/}
            </div>
            <div className={styles.footer_links}>
            <div className={styles.footer_sections}>
                <p style={{color:'#D3CEC4', paddingBottom:'10px', fontSize:'14px'}}>sections</p>
                <p className={styles.footer_p}>About</p>
                <p className={styles.footer_p}>Services</p>
                <p className={styles.footer_p}>Pricing</p>
                <button className={styles.footer_demo}>Demo <PlayArrowIcon/></button>
            </div>
            <div className={styles.footer_resources}>
                <p style={{color:'#D3CEC4', paddingBottom:'10px', fontSize:'14px'}}>resources</p>
                <p className={styles.footer_p}>Branding</p>
                <p className={styles.footer_p}>Ecommerce</p>
                <p className={styles.footer_p}>Custom</p>
                <p className={styles.footer_p}>CMS</p>
                <p className={styles.footer_p}>Support</p>
                <p className={styles.footer_p}>Analytics</p>


            </div>
            <div className={styles.footer_contact}>
                <p style={{color:'#D3CEC4', paddingBottom:'10px', fontSize:'14px'}}>contact</p>
                <p className={styles.footer_p}>(201) 328-7539</p>
                <p className={styles.footer_p}>shanonmcdonald@01ninjas.com</p>
                <div>
                <button className={styles.footer_demo}>Join us <FavoriteIcon style={{paddingLeft:'6px'}}/></button>
                </div>
            </div>
            </div>
            <div className={styles.footer_form}>
                <p style={{fontSize:'1.618em', paddingBottom:'20px'}}>Join our newsletter</p>
            <p style={{fontSize:'16px', paddingBottom:'10px', width:'100%'}}>Sign up to receive special deals and promotions!</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={{display:'flex', flexDirection:'column'}}>
                        <span style={{paddingBottom:'10px', fontSize:'14px', fontWeight:'500', textAlign:'left'}}>Email:</span>
                        <input 
                            type="text"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </label>
                </div>
                <div style={{float:'right'}}>
                <button style={{marginTop:'12px'}} className={styles.footer_demo}>Submit <ArrowForwardIosIcon style={{paddingLeft:'6px'}}/></button>
                </div>
</form>
            </div>
        </div>
    );
}

export default Footer;