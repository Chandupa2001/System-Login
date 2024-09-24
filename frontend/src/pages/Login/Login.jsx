import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigation = useNavigate();

  return (
    <div className='login'>
        <div className="login-container">
            <h2>Login</h2>
            <form action="">
                <div className="input-container">
                    <label htmlFor="email">Email</label><br/>
                    <input type="email" name="" id="" />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password</label><br/>
                    <input type="password" name="" id="" />
                </div>
                <button type='submit'>Login</button>
            </form>
            <p className="signup-text">
                Do not have an account? <span onClick={() => navigation('/signup')}>Sign Up</span>
            </p>
        </div>
    </div>
  )
}

export default Login