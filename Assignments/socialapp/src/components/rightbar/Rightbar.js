import React from 'react'
import gift from '../../assets/gift.png'
import './rightbar.css'
import Add from '../../assets/Cold, Smooth & Tasty (1).png'
import profile from '../../assets/pic_profile_men.jpg'

function Rightbar() {
  return (
    <div className='rightbar' >
      <div className="rightbarwrapper">
        <div className="birthdaycontainer">
          <img src={gift} alt="git" className="birthdayimg" />
          <span className="birthdaytext">
            <b>Saim Ansari</b> and <b>and 2 other Friends</b> have a birthday today!
          </span>
        </div>
        <img src={Add} alt="Adds..." className="rightbaradd" />
        <h4 className="rightbartitle">Online Friend</h4>
        <ul className="rightbarfriendlist">
          <li className="rightbarfriend">
            <div className="rightbarprofileimgcontainer">
              <img src={profile} alt="" className="rightbarprofileimg" />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightbarusername">Awais Ramzan</span>
          </li>
          <li className="rightbarfriend">
            <div className="rightbarprofileimgcontainer">
              <img src={profile} alt="" className="rightbarprofileimg" />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightbarusername">Awais Ramzan</span>
          </li>
          <li className="rightbarfriend">
            <div className="rightbarprofileimgcontainer">
              <img src={profile} alt="" className="rightbarprofileimg" />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightbarusername">Awais Ramzan</span>
          </li>
          <li className="rightbarfriend">
            <div className="rightbarprofileimgcontainer">
              <img src={profile} alt="" className="rightbarprofileimg" />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightbarusername">Awais Ramzan</span>
          </li>
          <li className="rightbarfriend">
            <div className="rightbarprofileimgcontainer">
              <img src={profile} alt="" className="rightbarprofileimg" />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightbarusername">Awais Ramzan</span>
          </li>
          <li className="rightbarfriend">
            <div className="rightbarprofileimgcontainer">
              <img src={profile} alt="" className="rightbarprofileimg" />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightbarusername">Awais Ramzan</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
