
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import './icon.css'

function Icon() {
    return (
        <div className='icon'>
            <ul>
                <li>Find me</li>
                <li><a href="https://github.com/Usamasarwar026" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
                <li><a href="https://www.linkedin.com/in/usama-sarwar-4b2a49260/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
                <li><a href="https://leetcode.com/u/Usama_Sarwar/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a></li>
                
            </ul>     
        </div>
    )
}

export default Icon
