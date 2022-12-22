import React from 'react';
import "./topbar.css"
import {NotificationsNone,  Language, Settings} from '@mui/icons-material';

export default function Topbar() {
  return <div>
      <div className='topbar'>
          <div className="topbarWrapper">
              <div className="topLeft">
                  <span className="logo">React Admin</span>
              </div>
              <div className='topRight'>
                  <div className="topbarIconContainer" id='lol'>
                        <NotificationsNone/>
                        <span className="topIconBadge" id='xd'>2</span>
                  </div>
                  <div className="topbarIconContainer" id='lol'>
                        <Language/>
                        <span className="topIconBadge" id='xd'>2</span>
                  </div>
                  <div className="topbarIconContainer" id='lol'>
                        <Settings/>
                  </div>
                  <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className="topAvatar" />
              </div>
              
          </div>
      </div>
  </div>
  ;
}
