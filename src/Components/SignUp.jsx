import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context/ContextProvider'
import { ChakraProvider } from '@chakra-ui/react'
import { Input} from '@chakra-ui/react'
import styles from '../CSS/Signup.module.css'


const SignUp = () => {

  const {handleSignUp}=useContext(Context)
  const [form,setForm]=useState({email:"",password:""})
  const handleChange=(e)=>{
    const {name,value}=e.target
    setForm({...form,[name]:value})
  }
  function onSubmit(event){
    event.preventDefault()
    handleSignUp(form)
  }
  return (
    <div>
 

         <form style={{textAlign:"center"}} onSubmit={onSubmit}>
            <div style={{ marginTop :"-25px",boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',paddingBottom:"20px",paddingTop:"20px" }}>
               <img style={{width:"300px"}} src='https://cdn1.cronometer.com/logos/cronometer-logo-orange.png' />
          </div>
          <div style={{ padding: 30 }}>
          <h3 style={{ fontWeight:"bold"}}>Create Your Free Account</h3>
          </div>
<ChakraProvider>
          <div className={styles.input1}>
          <Input required  type='email' placeholder='Email Address' name="email" autoComplete='on' value={form.email} onChange={handleChange}/>
          <br />
          <Input  style={{marginTop:"40px"}} required type='password' placeholder='Password' name="password" value={form.password} onChange={handleChange}/>
          <br />
               {/* <input type='password' placeholder='Confirm Password' /> */}
          <br />
     </div>
     </ChakraProvider>
     <div className={styles.term}>
        <h1 style={{ fontWeight: 'bold', fontSize: 20 }}>Your Body Type</h1>
        <div>
          <div style={{display:"flex",margin :"auto",width:"170px" ,justifyContent:"space-between"}}>
        <h6>Sex:</h6>
        <div> <input type="radio" name="gender" value="male"/> Male
        <input type="radio" name="gender" value="female"/> Female<br/></div>
         
        </div>
        <br/>
            <label>Born:</label><input style={{marginLeft:"20px"}} required type='date' name="dob"  />          
        <br/>   
            <label>Height:</label><input required style={{backgroundColor:"lightgrey",marginLeft:"20px"}} type='text' name="height"  placeholder='Enter Your Height'/>
        <br/>  
            <label>Weight:</label><input required style={{backgroundColor:"lightgrey",marginLeft:"20px"}} type='text' name="weight" placeholder='Enter Your Weight' /> 
        </div>
      
    </div>


        <div className={styles.term1}>
          <h1  style={{ fontWeight: 'bold', fontSize: 20 }}>
            Terms of Service & Privacy Settings
          </h1>
         
            {/* <input type='checkbox' value='Female'></input>{' '}
            <label> Check All </label> <br /> */}
            <p>
              By checking the box below you are indicating you have read and
              agree to our Terms of Service and Privacy Policy.
            </p>
            <input type='checkbox' value='Female'></input>{' '}
            <label> I agree to the cronometer.com Terms of Service </label>{' '}
            <br />
            <p>
              In order to give you the best experience using Cronometer, we need
              certain data permissions. (These are optional and can be updated
              in your settings any time.)
            </p>
            <input type='checkbox' value='Female'></input>{' '}
            <label>
              {' '}
              I agree to receive newsletters and promotional materials.{' '}
            </label>
            
        

        </div>
     
      <br />
     
        <div>
         
            {/* <Link to='/login'> */}
               <button className={styles.term2} type="submit">Create Account</button>
            {/* </Link> */}
          
        </div>
    
      <br />
      
    </form>
    

    </div>
  )
}

export default SignUp