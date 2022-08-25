import React from 'react'
import { Input,ButtonGroup,Button, Box} from '@chakra-ui/react'
import styles from "../CSS/Login.module.css"
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

const Login = () => {
  return (
    <>
    <ChakraProvider>
    <div className={styles.box}>
        <Box>
        <img className={styles.image} src="https://cdn1.cronometer.com/2021/landing/cronometer-logo.svg" alt=""/>
        <Input placeholder='Enter Email' />
      
        <Input placeholder='Enter Password' />
        <ButtonGroup variant='outline' spacing='6'>
           <Button colorScheme='blue'> <Link to="/diary">Submit</Link></Button>
        </ButtonGroup>
        </Box>
        <div className={styles.down}>
            <p>Not a member? <Link to="/blog">Sign Up Now</Link></p>
            <p>Forgot password?</p>
        </div>
    </div>
    </ChakraProvider>
    <Footer/>
    </>
  )
}

export default Login
 {/* <ChakraProvider> */}
//  <App />
 {/* </ChakraProvider> */}