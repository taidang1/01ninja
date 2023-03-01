import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.homepage}>
      <img className="homepageimage" src="/homepage.jpg" alt="" width="100%"/>
      <h1>Homepage</h1>
    </div>
  )
}
