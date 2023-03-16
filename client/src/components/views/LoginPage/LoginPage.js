import React,{useState} from 'react';
import Axios from 'axios';
import './LoginPage.css';



function LoginPage(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    function movetoMain()
    {
        Axios.post("http://localhost:8000/users/login",{
            email,
            password
        }.then(res => console.log(res))
        .then(console.log("server connected")))

        alert("로그인 성공!");

        window.location.href="/study";
    }

    function movetopassword()   
    {
        window.location.href="/newpass";
    }



    return(
        <div className ="main2">
            <div className = "login">
                <form>
                    <label aria-hidden="true">Login</label>
                    <input  style={{marginLeft:"50px"}}type="email" name = "email" onChange={handleEmail} placeholder = "Enter your Email" />
                    <br />
                    <input style={{marginLeft:"50px"}} type="password" name = "password" onChange={handlePassword} placeholder = "Enter your Password" />
                    <br />
                    <button style={{marginLeft:"50px"}} onClick={movetoMain}>Login</button>
                    <br />
                    <button style={{marginLeft: "50px"}} onClick={movetopassword}>Forgot password?</button>
                </form>
            </div>
        </div>
    )
}
export default LoginPage;