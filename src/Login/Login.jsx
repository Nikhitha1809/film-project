import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'
function Login() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [submitValue, onSubmitValue]= useState(false)
    const navigate = useNavigate();
    function handleSubmit(e){
        onSubmitValue(true)
        e.preventDefault();
        console.log(username,password)
        navigate('/')
    }
    if(submitValue){
        <Link to='/' ></Link>
    }
    return (
        <div className=" login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="heading">Login</h2>
                <div className="d-flex flex-column">
                    <label className="label-name">User Name :</label>
                    <input className="input-type" type="input" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="d-flex flex-column">
                    <label className="label-name">Password :</label>
                    <input className="input-type" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button className="bg-primary login-btn" type="submit">Submit</button>
                {submitValue && <Link to='/'>Home</Link>}
            </form>
        </div>
    )
}
export default Login;