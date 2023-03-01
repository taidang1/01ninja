import { useEffect, useState } from 'react'
import { useFirestore } from '../hooks/useFirestore'

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
        <div>
            <h3>Add a Transaction</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Company name:</span>
                    <input 
                        type="text"
                        required
                        onChange={(e) => setCompanyName(e.target.value)}
                        value={companyName}
                    />
                </label>
                <label>
                    <span>Website URL:</span>
                    <input 
                        type="text"
                        required
                        onChange={(e) => setWebsiteURL(e.target.value)}
                        value={websiteURL}
                    />
                </label>
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
    );
}

export default becomeapartner;