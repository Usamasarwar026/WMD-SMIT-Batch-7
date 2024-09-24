import Button from './button.js'
import './footer.css'

function Footer(){
    return(
        <div className="footer">
            <div className="footerbar">
                This is a footer
            </div>
            <Button name='Click me' />
        </div>
    )
}
export default Footer