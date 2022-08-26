import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context/ContextProvider'



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
      <div style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
        <img src='https://cdn1.cronometer.com/logos/cronometer-logo-orange.png' />
      </div>
      <div style={{ padding: 30 }}>
        <h1 style={{ fontWeight: 'bold', fontSize: 20 }}>
          Create Your Free Account
        </h1>
      </div>
    
        <input required  type='email' placeholder='Email Address' name="email" autoComplete='on' value={form.email} onChange={handleChange}/>
        <br />
        <input required type='password' placeholder='Password' name="password" value={form.password} onChange={handleChange}/>
        <br />
        {/* <input type='password' placeholder='Confirm Password' /> */}
        <br />
      
    
        <h1 style={{ fontWeight: 'bold', fontSize: 20 }}>Your Body Type</h1>
        <div>
          <label>
            <p>Sex:</p>
            <input  type='radio' value='Female'  name="Male"  /> <label>Male</label>
            <input   type='radio' value='Male' name="Female"  /> <label>Female</label>
          </label>
          <label>
            <label>Born:</label><input required type='date' name="dob"  />
          </label>
          <label>
            <label>Height:</label><input required type='text' name="height"  />
          </label>
          <label>
            <label>Weight:</label><input required type='text' name="weight"  />
          </label>
        </div>
      
    
        <div>
          <h1  style={{ fontWeight: 'bold', fontSize: 20 }}>
            Terms of Service & Privacy Settings
          </h1>
         
            <input type='checkbox' value='Female'></input>{' '}
            <label> Check All </label> <br />
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
            <br />
            <input type='checkbox' value='Female'></input>{' '}
            <label>
              {' '}
              I agree to receive personalized in-app ads. (You will receive less
              relevant, non-personalized ads if you opt out){' '}
            </label>
        

        </div>
     
      <br />
     
        <div>
         
            {/* <Link to='/login'> */}
               <button type="submit">Create Account</button>
            {/* </Link> */}
          
        </div>
    
      <br />
      <div>
        <p>Need help?</p>
        <a href='' style={{ color: 'coral' }}>
          Email Support
        </a>
      </div>
    </form>
    

    </div>
  )
}

export default SignUp