import React from 'react'
import './Login.css'
import Auth1 from './Auth1'
import Auth2 from './Auth2'
import { useNavigate } from 'react-router-dom'




const Login = () => {

    const router = useNavigate()
  return (

    <div className='base'>
        <div className='leftBar'>
            <img className='logo' src={`${process.env.PUBLIC_URL}/image.png`} alt="Login" />
            <p className='pbase'>BASE</p>
            <div className='socialm'>
                <img className='social' src={`${process.env.PUBLIC_URL}/github.png`} alt="Github" />
                <img className='social' src={`${process.env.PUBLIC_URL}/twitter.png`} alt="Twitter" />
                <img className='social' src={`${process.env.PUBLIC_URL}/linkedIn.png`} alt="LinkedIN" />
                <img className='social' src={`${process.env.PUBLIC_URL}/discord.png`} alt="Discord" />
            </div>
            


        </div>
        <div className='rightBar'>
            <p className='p1'>Sign In</p>
            <p className='p2'>Sign in to your account</p>
            <div className='autht'>
            <Auth1 className='auth1'></Auth1> <Auth2 className='auth2'></Auth2>
            </div>
            
        <form className='formBox' onSubmit={()=>{
                router('/dashboard')
            }}>
            <label>Email address</label><br/>
            <input type='email' className='input1'></input><br/><br/>
            <label>Password</label><br/>
            <input type='password' className='input1'></input><br/><br />
            <p>Forget password?</p>
            <button className='button1' >Sign In</button>
        </form>
        <p className='p3'>Don't have an account? Register here</p>

        </div>
        

    </div>
  )
}

export default Login
