import React from 'react'
import { Input,ButtonGroup,Button, Box} from '@chakra-ui/react'
import styles from "../CSS/Login.module.css"
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react'

const Login = () => {
  
  const [form,setForm]=useState({email:"",password:""})
  const handleChange=(e)=>{
    const {name,value}=e.target
    setForm({...form,[name]:value})
  }
  function onSubmit(event){
    event.preventDefault()
    console.log(form)
  }
  return (
    <>
    <ChakraProvider>
    <div className={styles.box}>
        <Box>
        <img className={styles.image} src="https://cdn1.cronometer.com/2021/landing/cronometer-logo.svg" alt=""/>
        <Input required  type='email' placeholder='Email Address' name="email" autoComplete='on' value={form.email} onChange={handleChange} />
      
        <Input required type='password' placeholder='Password' name="password" value={form.password} onChange={handleChange} />
        <ButtonGroup variant='outline' spacing='6'>
           <Button colorScheme='blue' onClick={onSubmit}>Submit</Button>
        </ButtonGroup>
        </Box>
        <div className={styles.down}>
            <p>Not a member? <Link to="/signup">Sign Up Now</Link></p>
            {/* <p>Forgot password?</p> */}
        </div>
    </div>
    </ChakraProvider>
    {/* <Footer/> */}
    </>
  )
}

export default Login
 {/* <ChakraProvider> */}
//  <App />
 {/* </ChakraProvider> */}