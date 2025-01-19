import React from 'react'
import "./Navbar.css"
import menu_icon from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search.png"
import upload_icon from "../../assets/upload.png"
import more_icon from "../../assets/more.png"
import notification_icon from "../../assets/notification.png"
import profile_icon from "../../assets/jack.png"
import { Link } from 'react-router-dom'
import Profile from "../../assets/Profile.jpg"
import mylogo from "../../assets/mylogo.png"

// setsidebar use for display and remove Categories and Subscribers name
const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
        {/* setsidebar use for display and remove Categories and Subscribers name */}
            <img src={menu_icon} onClick={()=>setSidebar(prev=>prev===false?true:false)} alt="" />
            <Link to="/"><h2>Yashasvi's YouTube</h2></Link>
        </div>
        <div className="nav-middle flex-div">
            <div className="search-box flex-div">
                <input type="text" placeholder='Search' />
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="nav-right flex-div">
            <img src={upload_icon} alt="" />
            <img src={more_icon} alt="" />
            <img src={notification_icon} alt="" />
            <img src={Profile} className="user-icon" />
        </div>
    </nav>
  )
}

export default Navbar
