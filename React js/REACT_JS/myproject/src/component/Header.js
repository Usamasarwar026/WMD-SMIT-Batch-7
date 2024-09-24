import Button from "./button"
import './header.css'
import logo from './assests/logo.png'

function Header() {
    return (
        <div className="header">
            <nav id='navbar'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="navlist">
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Experience</li>
                </div>
                <Button name='Sign Up'/>
            </nav>
        </div>
    )
}
export default Header