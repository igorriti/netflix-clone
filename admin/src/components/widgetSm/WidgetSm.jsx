import React, { useEffect,useState } from 'react';
import './widgetSm.css';
import { Visibility } from '@mui/icons-material';
import axios from 'axios';

export default function WidgetSm() {
    const [newUsers, setNewUsers] = useState([])

    useEffect(()=>{
        const getNewUsers = async ()=>{
            try {
                const res= await axios.get("/users?new=true",{
                    headers: {
                        token:
                        "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
                      }
                  })
            setNewUsers(res.data)
            } catch (err) {
                console.log(err);     
            }
        }
        getNewUsers()
    },[])
  return <div className='widgetSm'>
        <span className="widgetSmTitle">New Join Membres</span>
        <ul className="widgetSmList">
            {newUsers.map(user=>(
                <li key={user._id}className="widgetSmListItem">
                    <img src={user.avatar || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"} className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className='widgetSmUsername'>{user.username}</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
            ))}
        </ul>
  </div>;
}
