import React from 'react'
import {SiYoutube,SiTwitter,SiInstagram,SiFacebook} from 'react-icons/si'
import styles from '../CSS/Footer.module.css'
const Footer = () => {
  return (
    <div  className={styles.wh}>
        <div className={styles.handle}>
            <a href="https://www.instagram.com/cronometer_official/?hl=en" target="_blank" ><SiInstagram/></a>
            <a href="https://www.facebook.com/cronometer" target="_blank" > <SiFacebook/></a>
            <a href="https://twitter.com/cronometer" target="_blank" ><SiTwitter/></a>
            <a href="https://www.youtube.com/channel/UCX4_3R4oVBU3Ff5Jmh1iJbw" target="_blank" > <SiYoutube/></a>
        </div>

        <div className={styles.brand2}>
            <img className={styles.brand} src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg" alt="title"/>
            <img className={styles.brand} src="https://cdn1.cronometer.com/2021/landing/android-icon.svg" alt="title"/>

        </div>
        <hr/>

        <div className={styles.foot}>
            <div>
            <img  className={styles.logo} src="https://cdn1.cronometer.com/2021/landing/cronometer-logo.svg" alt="logo"/>
            </div>
            <div>
                <p className={styles.section}>Cronometer</p>
                <a href="https://cronometer.com/" ><p className={styles.section1}>For Individuals</p></a>
                <a href="https://cronometer.com/pro/" ><p className={styles.section1}>For ProfessioNals</p></a>
                <a href="https://cronometer.com/privacy/" ><p className={styles.section1}>Privacy</p></a>
                <a href="https://cronometer.com/terms/" ><p className={styles.section1}>Terms</p></a>
            </div>

            <div>
                <p className={styles.section}>The Company</p>
                <a href="https://cronometer.com/about/" ><p className={styles.section1}>About Us</p></a>
                <a href="https://cronometer.com/blog/" ><p className={styles.section1}>Crono Blog</p></a>
                <a href="https://forums.cronometer.com/" ><p className={styles.section1}>Crono Forums</p></a>
                <a href="https://cronometer.com/jobs/" ><p className={styles.section1}>Jobs</p></a>
                <a href="https://support.cronometer.com/hc/en-us" ><p className={styles.section1}>Support</p></a>
            </div>

            <div>
                <p className={styles.section}>Partners & Affiliates</p>
                <a href="https://www.shareasale.com/shareasale.cfm?merchantID=61121" ><p className={styles.section1}>Affilate Program</p></a>
                <a href="https://cronometer.com/blog/media/" ><p className={styles.section1}>Media Kit</p></a>
            </div>
        </div>
        <div>
            <p className={styles.section1}>Copyright © 2011-2022</p>
            <p className={styles.section1}>All rights reserved</p>
        </div>
    </div>
  )
}
<a href="" ></a>
export default Footer

