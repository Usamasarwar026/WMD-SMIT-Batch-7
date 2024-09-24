
function Button(props){
    const {name, onClick} = props
    return(
        <div className="btn">
            <button type="button" className="btn btn-outline-danger" onClick={onClick} >{name}</button>
        </div>
    )
}
export default Button