import React from 'react'
import './share.css'
import profile from '../../assets/blur pic.jpg'
import { IoMdPhotos } from "react-icons/io";
import { MdLabel } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Share() {
  return (
    <div className="share">
        <div className="sharewrapper">
            <div className="sharetop">
                <img className='shareprofileimg' src={profile} alt="profile_pic" />
                <input className='shareinput' type="text" placeholder="What's in your mind "/>
                
            </div>
            <hr className="sharehr" />
            <div className="sharebottom">
                <div className="shareoptions">
                    <div className="shareoption">
                        <IoMdPhotos color='tomato' size={25}/>
                        <span className="sharoptiontext">Video / photo</span>
                    </div>
                    <div className="shareoption">
                        <MdLabel color='blue' size={25}/>
                        <span className="sharoptiontext">Tag</span>
                    </div>
                    <div className="shareoption">
                        <FaLocationDot color='green' size={23}/>
                        <span className="sharoptiontext">Location</span>
                    </div>
                    <div className="shareoption">
                        <MdOutlineEmojiEmotions color='skyblue' size={25}/>
                        <span className="sharoptiontext">Feelings</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Share
