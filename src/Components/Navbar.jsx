import React from 'react'
import { NavLink ,Link} from 'react-router-dom'
import { DropdownButton,Dropdown } from 'react-bootstrap';
import styles from "../CSS/Navbar.module.css"
const Navbar = () => {
  
  return (
    <div>
        <div className={styles.top1}>

      <div className={styles.top}>
        <Link to="/"><img  className={styles.logo} src="https://cdn1.cronometer.com/2021/landing/cronometer-logo.svg" alt="logo"/></Link> 
        </div>

        <div className={styles.right}>
        <NavLink to="/products"> <DropdownButton style={{backgroundColor:"grey"}} id="dropdown-item-button" title="Products">
           <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
           <Dropdown.Item as="button">Action</Dropdown.Item>
           <Dropdown.Item as="button">Another action</Dropdown.Item>
           <Dropdown.Item as="button">Something else</Dropdown.Item>
       </DropdownButton></NavLink>
        <NavLink className={styles.nav} to="/support">Support</NavLink>
        <NavLink className={styles.nav} to="/blog">Blog</NavLink>
        <NavLink className={styles.nav} to="/forums">Forums</NavLink>
        <NavLink className={styles.nav} to="/about">About</NavLink>
        <NavLink className={styles.nav} to="/login"><button className={styles.login}>Login</button></NavLink>

          </div>
        </div>
        

    </div>
  )
}

export default Navbar