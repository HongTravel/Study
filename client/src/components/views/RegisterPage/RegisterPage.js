import React, {useState} from 'react';
import Axios from 'axios';
import './RegisterPage.css';


function RegisterPage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }


    function movetoLogin(event)
    {   event.preventDefault();
        alert(`환영합니다. ${name}님!`);

        const formData = new FormData();
        formData.append('name',name);
        formData.append('email',email);
        formData.append('password',password);

        const xhr = new XMLHttpRequest();
        xhr.open('POST','http://127.0.0.1:8000/users/register');
        xhr.setRequestHeader('Content-Type','multipart/form-data');
        xhr.send(formData);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === XMLHttpRequest.DONE){
                if(xhr.status === 200){
                    console.log('서버 전송 완료');
                }
                else {
                    console.log('서버 전송 실패');
                }
            }
        }

         window.location.href="/login";
    }

    return(
        <div className = "main">
            <div className = "signup">
                <form>
                    <label aria-hidden="true">Sign Up</label>
                    <input style={{marginLeft: "50px"}} type="text" name="name" onChange={handleName} placeholder="Enter your Name" />
                    <br />
                    <input style={{marginLeft: "50px"}} type="email" name="email" onChange={handleEmail} placeholder= "Enter your Email" />
                    <br />
                    <input style={{marginLeft: "50px"}} type="password" name="password" onChange={handlePassword} placeholder="Enter your Password" />
                    <br />
                    <button style={{marginLeft:"50px"}} onClick={movetoLogin}>Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage;