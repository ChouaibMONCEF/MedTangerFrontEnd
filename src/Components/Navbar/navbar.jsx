import React from 'react'
import "./navbar.css"
import {NotificationsNone, Language , Settings} from '@material-ui/icons'


export default function navbar() {
  return (
    <div className="navbar">
      <div className="navbarwrapper">
        <div className="leftnav">
          <span className="logo">Nomea</span>
        </div>
        <div className="rightnav">
          <div className="iconcontainer">
            <NotificationsNone />
            <span className="iconbadge">2</span>
          </div>
          <div className="iconcontainer">
            <Language />
            <span className="iconbadge">2</span>
          </div>
          <div className="iconcontainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/4315830/pexels-photo-4315830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
            srcset=""
            className='avatar'
          />
        </div>
      </div>
    </div>
  );
}
