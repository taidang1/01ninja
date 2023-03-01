import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <Link href="/">01ninja</Link>   
                </div>
                <div className={styles.link}>
                    <div className={styles.singlelink}>
                        <Link href="/about">About</Link>
                    </div>
                    <div className={styles.singlelink}>
                        <Link href="/about">Account</Link>
                    </div>
                    <div className={styles.singlelink}>
                        <Link href="/about">Sections</Link>
                    </div>
                    <div className={styles.singlelink}>
                        <Link href="/about">Docs</Link>
                    </div>
                </div>
                <button className={styles.btn}>
                    <Link href="/becomeapartner">Join Us</Link>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;