import React from 'react';
import "./user.css"
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function User() {
  return <div className='user'>
      <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link>
      </div>
      <div className="userContainer">
          <div className="userShow">
              <div className="userShowTop">
                  <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="" className='userShowImg' />
                  <div className="userShowTopTitle">
                      <span className='userShowUsername'>Juan Beckham</span>
                      <span className='userShowUserTitle'>Software Engineer</span>

                  </div>
              </div>
              <div className="userShowBottom">
                  <span className="userShowTitle">Account Details</span>
                  <div className="userShowInfo">
                    <PermIdentity className='userShowIcon'/>
                    <span className="userShowInfoTitle">JBeckham01</span>
                  </div>
                  <div className="userShowInfo">
                    <CalendarToday className='userShowIcon'/>
                    <span className="userShowInfoTitle">17.12.2001</span>
                  </div>
                  <span className="userShowTitle">Contact Details</span>

                  <div className="userShowInfo">
                    <PhoneAndroid className='userShowIcon'/>
                    <span className="userShowInfoTitle">+54 9 223 12345678</span>
                  </div>
                  <div className="userShowInfo">
                    <MailOutline className='userShowIcon'/>
                    <span className="userShowInfoTitle">JBeckham01@gmail.com</span>
                  </div>
                  <div className="userShowInfo">
                    <LocationSearching className='userShowIcon'/>
                    <span className="userShowInfoTitle">Los Angeles | USA</span>
                  </div>
              </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form action="" className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label>Username</label>
                        <input type="text" placeholder='JBeckham01'
                        className='userUpdateInput'/>
                    </div>
                    <div className="userUpdateItem">
                        <label>Full name</label>
                        <input type="text" placeholder='Juan Beckham'
                        className='userUpdateInput'/>
                    </div>
                    <div className="userUpdateItem">
                        <label>Email</label>
                        <input type="text" placeholder='JBeckham01@gmail.com'
                        className='userUpdateInput'/>
                    </div>
                    <div className="userUpdateItem">
                        <label>Phone</label>
                        <input type="text" placeholder='+54 9 223 12345678 '
                        className='userUpdateInput'/>
                    </div>
                    <div className="userUpdateItem">
                        <label>Address</label>
                        <input type="text" placeholder='New York | USA'
                        className='userUpdateInput'/>
                    </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img src="https://images.pexels.com/photos/10464246/pexels-photo-10464246.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="userUpdateImg" />
                        <label htmlFor="file"><Publish className='userUpdateIcon'/> Update Photo</label>
                        <input type="file" id='file' style={{display:"none"}}/>
                    </div>
                    <button className="userUpdateButton">Update</button>
                </div>
            </form>

          </div>    

      </div>
  </div>;
}
