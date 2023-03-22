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
        alert("로그인 성공!");

        const formData = new FormData();
        formData.append('email',email);
        formData.append('password',password);

        const xhr = new XMLHttpRequest()
        xhr.open('POST','http://127.0.0.1:8000/users/login');
        xhr.setRequestHeader('Content-Type','multipart/form-data');
        xhr.send(formData);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === XMLHttpRequest.DONE){
                if(xhr.status === 200){
                    console.log('서버 전송 완료');
                }
                else{
                    console.log('서버 전송 실패');
                }
            }
        }


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