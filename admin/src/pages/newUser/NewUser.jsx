import React from 'react';
import './newUser.css';
export default function NewUser() {
  return <div className='newUser'>
      <h1 className="newUserTitle">New User</h1>
      <form action="" className='newUserForm'>
          <div className="newUserInputs">
            <div className="newUserItem">
                <label htmlFor="">Username</label>
                <input type="text" placeholder='john' />
            </div>
            <div className="newUserItem">
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder='John Smith' />
            </div>
            <div className="newUserItem">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='john@gmail.com' />
            </div>
            <div className="newUserItem">
                <label htmlFor="">Password</label>
                <input type="password" placeholder='password' />
            </div>
            <div className="newUserItem">
                <label htmlFor="">Phone</label>
                <input type="password" placeholder='+54 9 223 12345678' />
            </div>
            <div className="newUserItem">
                <label htmlFor="">Address</label>
                <input type="password" placeholder='New York | USA' />
            </div>
            <div className="newUserItem">
            <label htmlFor="">Gender</label>

                <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="male" />
                    <label for="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female" />
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="other" value="other" />
                    <label for="other">Other</label>
                </div>
            </div>
            <div className="newUserItem">
                <label htmlFor="">Active</label>
                <select name="active" id="active" className="newUserSelect">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
          </div>
          <button className="newUserButton">Create</button>
      </form>
  </div>;
}
