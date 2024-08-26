import Button from "./button"

function Header() {
    return (
        <div className="header">
            <nav>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <Button/>
            </nav>
        </div>
    )
}
export default Header