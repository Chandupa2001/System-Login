import React from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const navigation = useNavigate();

    return (
        <div className='signup'>
            <div className="signup-container">
                <h2>Sign Up</h2>
                <form action="">
                    <div className="input-container">
                        <label htmlFor="name">Full Name</label><br />
                        <input type="text" name="" id="" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name="" id="" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password</label><br />
                        <input type="password" name="" id="" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="phoneNo">Phone Number</label><br />
                        <input type="tel" name="" id="" />
                    </div>
                    <button type='submit'>Sign Up</button>
                </form>
                <p className="login-text">
                    Already have an account? <span onClick={() => navigation('/')}>Login</span>
                </p>
            </div>
        </div>
    )
}

export default SignUp