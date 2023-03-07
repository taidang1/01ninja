import { useEffect, useState } from 'react'
import { useFirestore } from '../hooks/useFirestore'
import styles from '../styles/Join.module.css'

const becomeapartner = () => {
    const [companyName, setCompanyName] = useState('')
    const [websiteURL, setWebsiteURL] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [businessEmail, setBusinessEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [howCanWeHelp, setHowCanWeHelp] = useState('')
    const [hearAboutUs, setHearAboutUs] = useState('')

    const { addDocument, response } = useFirestore('customerInfo')

    const handleSubmit = (e) => {
        e.preventDefault()
        addDocument({
            companyName,
            websiteURL,
            firstName,
            lastName,
            businessEmail,
            phoneNumber,
            howCanWeHelp,
            hearAboutUs
        })
    }

    useEffect(() => {
        if (response.success) {
            console.log('ok')
            setCompanyName('1')
            setWebsiteURL('')
            setFirstName('')
            setLastName('')
            setBusinessEmail('')
            setPhoneNumber('')
            setHowCanWeHelp('')
            setHearAboutUs('')
        }
    }, [response.success])

    return (
        <div className={styles.join_us}>
            <h3 style={{fontSize:'1.618em', fontWeight:'400'}}>Request a call and demo with us!</h3>
            <div className={styles.join_form}>
            <form onSubmit={handleSubmit}>
                <div>
                <label style={{display:'flex', flexDirection:'column'}}>
                    <span>Company name:</span>
                    <input 
                        type="text"
                        required
                        onChange={(e) => setCompanyName(e.target.value)}
                        value={companyName}
                    />
                </label>
                <label style={{display:'flex', flexDirection:'column'}}>
                    <span>Website URL:</span>
                    <input 
                        type="text"
                        required
                        onChange={(e) => setWebsiteURL(e.target.value)}
                        value={websiteURL}
                    />
                </label>
                </div>
                <h4>Point of Contact</h4>
                <label>
                    <span>First name:</span>
                    <input 
                        type="text"
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                </label>
                <label>
                    <span>Last name:</span>
                    <input 
                        type="text"
                        required
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                </label>
                <label>
                    <span>Business email:</span>
                    <input 
                        type="text"
                        required
                        onChange={(e) => setBusinessEmail(e.target.value)}
                        value={businessEmail}
                    />
                </label>
                <label>
                    <span>Phone number:</span>
                    <input 
                        type="number"
                        required
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                    />
                </label>
                <label>
                    <span>How can we help?</span>
                    <input 
                        type="text"
                        required
                        onChange={(e) => setHowCanWeHelp(e.target.value)}
                        value={howCanWeHelp}
                    />
                </label>
                <label>
                    <span>How did you hear about us?</span>
                    <input 
                        type="text"
                        required
                        onChange={(e) => setHearAboutUs(e.target.value)}
                        value={hearAboutUs}
                    />
                </label>
                <button>Submit</button>
            </form>
            </div>
        </div>
    );
}

export default becomeapartner;