

function Login(){
    return(
        <div className="container">
            <label htmlFor="UserName">UserName:</label>
            <input type="text" name="userName" id="UserName" placeholder="Enter Your Name"/>
            <label htmlFor="gmail">Gmail:</label>
            <input type="email" name="gmail" id="gmail" placeholder="Enter Your Gmail"/>
            <input type="checkbox" name="reminder" id="" />Reminder me
        </div>
    )
}
export default Login