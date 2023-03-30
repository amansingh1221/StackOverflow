import React, { useState } from 'react'
import './Auth.css'
import icon from '../../assets/logo1.png'
import AboutAuth from './AboutAuth'
import {signup,login} from '../../actions/auth'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Auth = () => {

  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch=useDispatch()
  const navigate=useNavigate()



  const handleSwitch = () => {
    setIsSignup(!isSignup);
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!email && !password){
      alert("enter email and password")
    }
    if(isSignup){
      if(!name){
        alert("enter a name to continue")
      }
      dispatch(signup({name,email,password},navigate))
    }
    else{
      dispatch(login({email,password},navigate))
    }
  }

  return (
    <section className='auth-section'>
    {
      isSignup && <AboutAuth />
    }
      <div className='auth-container-2'>
        {!isSignup && <img src={icon} alt='Stack Overflow' className='login-logo' />}
        <form onSubmit={handleSubmit}>
          {
            isSignup &&
            <label htmlFor='name'>
              <h4>
                Display name
              </h4>
              <input type='text' name='name' id='name' onChange={(e)=>{setName(e.target.value)}} />
            </label>

          }
          <label htmlFor='email'>
            <h4>Email</h4>
            <input type='email' name='email' id='email' onChange={(e)=>{setEmail(e.target.value)}} />
          </label>
          <label htmlFor='password'>
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <h4>Password</h4>
              {!isSignup && <p style={{color:"#007ac6",fontSize:'13px'}}>forget password?</p>}
            </div>

            <input type='password' name='password' id='password' onChange={(e)=>{setPassword(e.target.value)}}/>
            {isSignup && <p>Password must contains eight <br />characters, including atleast 1letter and 1 number.</p>}
          </label>
          {
            isSignup &&
            <label htmlFor='check'>
              <input type='checkbox' id='check' />
              <p style={{fontSize:'13px'}}>Accept conditions</p>
            </label>


          }
          <button type='submit' className='auth-btn'>{isSignup ? 'Sign up' : "Log in"}</button>

          {
            isSignup &&
            <p style={{color:"#666767", fontSize:'13px'}}>By clicking "Sign up", you agree to our <span style={{color:"#007ac6"}}>terms of<br /> service</span>, <span style={{color:"#007ac6"}}>privacy policy</span> and <span style={{color:"#007ac6"}}>cookie policy</span>
            </p>

          }
        </form>
        <p>
          {isSignup ? 'Already have an account' : "Dont have an account?"}
          <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Login" : 'Sign up'}</button>
        </p>
      </div>
    </section>
  )
}

export default Auth