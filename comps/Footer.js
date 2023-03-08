import styles from '../styles/Footer.module.css';
import { useEffect, useState } from 'react'
import { useFirestore } from '../hooks/useFirestore'


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
            <h3>Follow up with our promotions</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={{display:'flex', flexDirection:'column'}}>
                        <span>Email:</span>
                        <input 
                            type="text"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Footer;