import { ArrowDropDown, Notifications, Search, WindowSharp } from '@mui/icons-material';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';
import { logout } from "../../authContext/AuthActions";
import { useNavigate } from "react-router-dom";

import './navbar.scss'
const Navbar = () => {
    const [isScrolled,setIsScrolled] = useState(false);
    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate()

  window.onscroll = () =>{
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll=null);
  }

    const handleLogout = ()=>{
        navigate("/");
    }

  return <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
          <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
                <Link to="/" className='link'>
                    <span>Home</span>
                </Link>
                <Link to="/series" className='link'>
                    <span className='navbarmainLinks'>TV Shows</span>
                </Link>
                <Link to="/movies" className='link '>
                    <span className='navbarmainLinks active'>Movies</span>
                </Link>
                <span>New and Popular</span>
                <span>My list</span>
          </div>
          <div className="right">
                <Search className='icon'/>
                <span>{JSON.parse(localStorage.getItem("user")).username}</span>
                <Notifications className='icon'/>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="" />
                <div className="profile">
                    <ArrowDropDown className='icon'/>
                    <div className="options">
                        <span>Settings</span>
                        <span onClick={()=>{dispatch(logout())},handleLogout}>Logout</span>
                    </div>
                </div>
               
          </div>
      </div>
  </div>;
};

export default Navbar;
