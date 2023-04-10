import React from 'react'
import "../Style/navbar.css"
import profile from "../Assets/icons/Profile.svg"
import cart from "../Assets/icons/Cart.svg"
import messages from "../Assets/icons/Messages.svg"
import orders from "../Assets/icons/Orders.svg"

const Navbar = () => {
  return (
    <div className='navbar_main'>
        <img src={require("../Assets/logo_variants/colored.png")} style={{
            width: "46p"
        }}/>
        <div className="navbar_search">
            <input placeholder='Ara' type="text" className='navbar_search_input'/>
            <select className='navbar_search_category'>
                <option value="All Category" className='navbar_search_category_option'>All Category</option>
                <option value="Category" className='navbar_search_category_option'>All Category</option>
            </select>
            <button className='navbar_search_submit_btn'>Ara</button>
        </div>
        <div className="navbar_right_icons">
            <a href="Profile" className='nav_item'>
                <img src={profile} className='nav_item_icon' alt="" />
                <span className='nav_item_name'>Profile</span>
            </a>
            <a href='messages' className='nav_item'>
                <img src={messages} className='nav_item_icon' alt="" />
                <span className='nav_item_name'>Message</span>
            </a>
            <a href="orders" className='nav_item'>
                <img src={orders} className='nav_item_icon' alt="" />
                <span className='nav_item_name'>Orders</span>
            </a>
            <a href="Cart" className='nav_item'>
                <img src={cart} className='nav_item_icon' alt="" />
                <span className='nav_item_name'>Orders</span>
            </a>
        </div>
    </div>
  )
}

export default Navbar