import './button.css'

function Button (props){
    const {title,onClick} = props
    return(
        <button className="button" onClick={onClick}>{title}</button>
    )
}
export default Button
