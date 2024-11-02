import React from 'react'
import './login.css'

function Login() {
  return (
    <div className="login">
      <div className="loginwrapper">
        <div className="loginleft">
            <h3 className="loginlogo">US Social</h3>
            <span className="logindesc">
              Connect with Friend and World around you on US Social
            </span>
        </div>
        <div className="loginright">
          <div className="loginbox">
            <input type="email" placeholder='Enter your Email' className="logininput" />
            <input type="password" placeholder='Enter your Password' className="logininput" />
            <button className="loginbutton">Log In</button>
            <span className="loginforget">Forget Password?</span>
            <button className="loginregisterbutton">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
