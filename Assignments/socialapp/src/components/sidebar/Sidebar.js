import React from 'react';
import { MdOutlineRssFeed } from "react-icons/md";
import { FaStore, FaUserFriends, FaUsers, FaVideo } from 'react-icons/fa';
import profile from '../../assets/blur pic.jpg'
import './sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarwrapper">
                <ul className='sidebarlist'>
                    <li className="sidebarlistitem">
                        <MdOutlineRssFeed className='sidebaricon'/>
                        <span className="sidebarlistitemtext">Feed</span>
                    </li>
                    <li className="sidebarlistitem">
                    <FaUserFriends className="sidebaricon" />
                        <span className="sidebarlistitemtext">Friend</span>
                    </li>
                    <li className="sidebarlistitem">
                        <FaVideo className='sidebaricon'/>
                        <span className="sidebarlistitemtext">Video</span>
                    </li>
                    <li className="sidebarlistitem">
                        <FaStore className='sidebaricon'/>
                        <span className="sidebarlistitemtext">Store</span>
                    </li>
                    <li className="sidebarlistitem">
                        <FaUsers className='sidebaricon'/>
                        <span className="sidebarlistitemtext">Groups</span>
                    </li>
                </ul>
                <hr className="sidebarhr" />
                <ul className="sidebarfriendlist">
                    <li className="sidebarfriend">
                        <img src={profile} alt="profile_pic" className="sidebarfriendimg" />
                        <span className="sidebarfriendname">Usama Sarwar</span>
                    </li>
                </ul>
                <ul className="sidebarfriendlist">
                    <li className="sidebarfriend">
                        <img src={profile} alt="profile_pic" className="sidebarfriendimg" />
                        <span className="sidebarfriendname">Usama Sarwar</span>
                    </li>
                </ul>
                <ul className="sidebarfriendlist">
                    <li className="sidebarfriend">
                        <img src={profile} alt="profile_pic" className="sidebarfriendimg" />
                        <span className="sidebarfriendname">Usama Sarwar</span>
                    </li>
                </ul>
                <ul className="sidebarfriendlist">
                    <li className="sidebarfriend">
                        <img src={profile} alt="profile_pic" className="sidebarfriendimg" />
                        <span className="sidebarfriendname">Usama Sarwar</span>
                    </li>
                </ul>
                <ul className="sidebarfriendlist">
                    <li className="sidebarfriend">
                        <img src={profile} alt="profile_pic" className="sidebarfriendimg" />
                        <span className="sidebarfriendname">Usama Sarwar</span>
                    </li>
                </ul>
                <ul className="sidebarfriendlist">
                    <li className="sidebarfriend">
                        <img src={profile} alt="profile_pic" className="sidebarfriendimg" />
                        <span className="sidebarfriendname">Usama Sarwar</span>
                    </li>
                </ul>
                <ul className="sidebarfriendlist">
                    <li className="sidebarfriend">
                        <img src={profile} alt="profile_pic" className="sidebarfriendimg" />
                        <span className="sidebarfriendname">Usama Sarwar</span>
                    </li>
                </ul>
                <ul className="sidebarfriendlist">
                    <li className="sidebarfriend">
                        <img src={profile} alt="profile_pic" className="sidebarfriendimg" />
                        <span className="sidebarfriendname">Usama Sarwar</span>
                    </li>
                </ul>
                <ul className="sidebarfriendlist">
                    <li className="sidebarfriend">
                        <img src={profile} alt="profile_pic" className="sidebarfriendimg" />
                        <span className="sidebarfriendname">Usama Sarwar</span>
                    </li>
                </ul>
                <ul className="sidebarfriendlist">
                    <li className="sidebarfriend">
                        <img src={profile} alt="profile_pic" className="sidebarfriendimg" />
                        <span className="sidebarfriendname">Usama Sarwar</span>
                    </li>
                </ul>
                <ul className="sidebarfriendlist">
                    <li className="sidebarfriend">
                        <img src={profile} alt="profile_pic" className="sidebarfriendimg" />
                        <span className="sidebarfriendname">Usama Sarwar</span>
                    </li>
                </ul>
                <ul className="sidebarfriendlist">
                    <li className="sidebarfriend">
                        <img src={profile} alt="profile_pic" className="sidebarfriendimg" />
                        <span className="sidebarfriendname">Usama Sarwar</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
