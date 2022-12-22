import "./register.scss"
import {useState,useRef} from 'react';
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
export default function Register() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [username,setUsername] = useState("")

    const navigate = useNavigate();

    const emailRef = useRef()
    const passwordRef = useRef()
    const usernameRef = useRef()


    const handleStart = ()=>{
        setEmail(emailRef.current.value)
    }

    const handleFinish = async (e)=>{
        e.preventDefault()
        setPassword(passwordRef.current.value);
        setUsername(usernameRef.current.value)
        try {
            await axios.post("api/auth/register", {email,username, password});
            navigate("/login")
        } catch (err) {
            console.log(err)
        }


    }
  return (
  <div className="register">
    <div className="top">
        <div className="wrapper">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
            <Link to="/login">
                <button className="loginButton">Sign In</button>
            </Link>
        </div>
    </div>
    <div className="container">
        <h1>Unlimited movies, TV<br/> 
        shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
            Ready to watch? Enter your email to create or restar your membership.
        </p>{
            !email ? (
                <div className="input">
                    <input type="email" placeholder="Email adress" ref={emailRef} />
                    <button className="registerButton" onClick={handleStart}>Get Started <ArrowForwardIosOutlined className="iconArrow"/>  </button>
                </div>
            ) : (
                <div className="input">
                    <input type="text" placeholder="Username" ref={usernameRef} />
                    <input type="password" placeholder="Password" ref={passwordRef} />
                    <button className="registerButton" onClick={handleFinish}>Start</button>
                </div>
            )
        }
       
    </div>
  </div>);
}
