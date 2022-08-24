import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import styles from "./Home.module.css"

const Home = () => {
  return (
    <div>
         <div className={styles.top1}>
          <div>
            <p className={styles.title}>Eat smarter.</p>
            <p className={styles.title}>Live better.</p>
            <p className={styles.title1}>Track your calories, exercise,<br/> biometrics and health data.</p>
            <button className={styles.signup}>Sign Up-It's Free!</button>
            <p className={styles.already}>Already have an account? <Link to="/blog">Log in.</Link></p>
          </div>
          <div><img className={styles.image1} src="https://cdn1.cronometer.com/2021/landing/cronometer-hero-graphic.svg" alt="titlemobile"/></div>
         </div>


        <div>
            <p className={styles.see}>As Seen On</p>
            <div className={styles.brand1}>
                <img className={styles.brand} src="https://cdn1.cronometer.com/2021/landing/media-mention-2.svg" alt="title"/>
                <img className={styles.brand} src="https://cdn1.cronometer.com/2021/landing/media-mention-1.svg" alt="title"/>
                <img className={styles.brand} src="https://cdn1.cronometer.com/2021/landing/media-mention-3.svg" alt="title"/>
            </div>
            <div><p className={styles.available}> Available on Web, iOS and Android</p></div>
            <div className={styles.brand2}>
                <img className={styles.brand} src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg" alt="title"/>
                <img className={styles.brand} src="https://cdn1.cronometer.com/2021/landing/android-icon.svg" alt="title"/>

            </div>
        </div>



        <div  className={styles.discover3}>
            <div>
               <p className={styles.discover}>Discover your nutrition</p>
               <p className={styles.discover1}>Cronometer encourages you to not just count your <br/> calories but to focus on your nutrition as a whole.</p>
            </div>

            <div className={styles.discover2}>
                <div>
                    <img className={styles.brand} src="https://cdn1.cronometer.com/2021/landing/community-icon.svg" alt="title"/>
                    <p className={styles.dis4}>Over 5 million users</p>
                    <p className={styles.discover1}>Join the community to get tips and inspiration from other users on our forums and Facebook group.</p>
                </div>

                <div>
                    <img className={styles.brand} src="https://cdn1.cronometer.com/2021/landing/nutrition-icon.svg" alt="title"/>
                    <p className={styles.dis4}>Accurate nutrition data</p>
                    <p className={styles.discover1}>Be confident that the food you log has the correct nutrition data. We verify every food submission for accuracy.</p>
                </div>

                <div>
                    <img className={styles.brand} src="https://cdn1.cronometer.com/2021/landing/security-icon.svg" alt="title"/>
                    <p className={styles.dis4}>Data privacy & security</p>
                    <p className={styles.discover1}>We take the security of our users' accounts seriously - we will never sell your account data to third parties.</p>
                </div>
            </div>
        </div>


            <div>
               <div>
                 <p className={styles.discover}>Develop healthy habits</p>
                 <p className={styles.discover1}>Count your calories, ensure you're meeting <br/>nutrient targets, and see your progress over time.</p>
               </div>

               <div className={styles.discover2}>
                 <div>
                    <img className={styles.brand} src="https://cdn1.cronometer.com/2021/landing/micronutrients-icon.svg" alt="title"/>
                    <p className={styles.dis4}>Track up to 82 micronutrients</p>
                    <p className={styles.discover1}>Log your meals and track all your macro and micronutrients.</p>
                 </div>

                 <div>
                    <img className={styles.brand} src="https://cdn1.cronometer.com/2021/landing/diary-icon.svg" alt="title"/>
                    <p className={styles.dis4}>Log meals, exercise and biometrics</p>
                    <p className={styles.discover1}>Plus, you can create custom foods, recipes, exercises and biometrics!</p>
                 </div>

                 <div>
                    <img className={styles.brand} src="https://cdn1.cronometer.com/2021/landing/reports-icon.svg" alt="title"/>
                    <p className={styles.dis4}>Valuable reports and charts</p>
                    <p className={styles.discover1}> Learn how nutrients and biometrics correlate over time.</p>
                 </div>
               </div>

               <div className={styles.discover2}>
                 <div>
                    <img className={styles.brand} src="https://cdn1.cronometer.com/2021/landing/scale-icon.svg" alt="title"/>
                    <p className={styles.dis4}>Custom diet settings</p>
                    <p className={styles.discover1}>Set weight, macro & nutrient targets to meet your goals.</p>
                 </div>

                 <div>
                    <img className={styles.brand} src="https://cdn1.cronometer.com/2021/landing/fasting-icon.svg" alt="title"/>
                    <p className={styles.dis4}>Fasting timer</p>
                    <p className={styles.discover1}>Track your intermittent fasts and see their effect over time.</p>
                 </div>

                 <div>
                    <img className={styles.brand} src="https://cdn1.cronometer.com/2021/landing/food-icon.svg" alt="title"/>
                    <p className={styles.dis4}>Diet support</p>
                    <p className={styles.discover1}>Whether you’re Keto, Vegan, or on one recommended by your doctor.</p>
                 </div>
               </div>
            </div>


            <div className={styles.find1}>
                <p className={styles.find}>Find out if you're getting the vitamins and <br/>minerals you need with our food diary app.</p>
                <Link to="/blog"><button className={styles.signup}>Sign Up-It's Free!</button></Link>
            </div>

            <div>
                <p className={styles.find}>Sync with Apps and Devices</p>
                <p className={styles.discover1}>Sync Cronometer with these activity trackers, Apple Health, Google Fit and Samsung Health.</p>
                <img className={styles.client}src="https://cdn1.cronometer.com/2021/landing/devices-p-1600.png" alt="title"/>
            </div>
            <hr/>

            <div>
                <p className={styles.discover}>Cronometer Reviews</p>
                <p className={styles.discover1}>Check us out in your app store.</p>
            </div>

            {/* <Image-------------------->*2 */}

            <div className={styles.crl2}>
                <div>
                    <img className={styles.crl}src="https://cdn1.cronometer.com/2021/landing/crono-pro-graphic.svg" alt="title" />
                </div>
                <div>
                    <img className={styles.crl1} src="https://cdn1.cronometer.com/2021/landing/cronometer-pro-logo.svg" alt="" />
                    <p>Are you a healthcare professional?</p>
                    <p  className={styles.discover1}>Check out our software designed for nutritionists,<br/> dietitians, research teams, schools, and hospitals.</p>
                    <button className={styles.learn}>Learn about Pro</button>
                </div>

            </div>

            <div >
                <p className={styles.discover}>We are Canadian</p>
                <p className={styles.discover1}>Independently owned and operated by people who <br/>care about their users' nutrition.</p>
                <img className={styles.team} src="https://cdn1.cronometer.com/2021/landing/cronometer-staff-2-p-1600.jpeg" alt="" />
                <p className={styles.head}>Our headquarters are based in the idyllic mountain town of Revelstoke, BC, Canada. We are a team of over 25 professionals brought together by a love of nutrition, skiing, biking and the great outdoors.</p>
                <button className={styles.aboutus}>About Us</button>
                <hr/>
                <p className={styles.discover1}>Help us spread the good word about nutrition and become an affiliate.</p>
                <button className={styles.aboutus}>Become an Affiliate</button>

            </div>
        
    <Footer/>

    </div>
  )
}

export default Home