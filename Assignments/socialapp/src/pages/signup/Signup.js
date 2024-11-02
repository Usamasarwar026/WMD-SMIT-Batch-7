import React from 'react'
import './signup.css'
function Signup() {
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
            <input type="text" placeholder='Enter UserName' className="logininput" />
            <input type="email" placeholder='Enter your Email' className="logininput" />
            <input type="password" placeholder='Enter your Password' className="logininput" />
            <input type="number" placeholder='Enter your Phone number' className="logininput" />
            <button className="loginbutton">Sign Up</button>
            <button className="loginregisterbutton">Login to your Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
