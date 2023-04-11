import React, { useEffect, useState } from 'react'
import "../Style/home.css"
import Navbar from '../Components/Navbar'

const Home = () => {
  const ms_item_base = [
    {
      id: 1,
      title: 'Automobiles',
      selected: true
    },
    {
      id: 2,
      title: 'Clothes and wear',
      selected: false
    },
    {
      id: 3,
      title: 'Home interiors',
      selected: false
    },
    {
      id: 4,
      title: 'Computer and tech',
      selected: false
    },
    {
      id: 5,
      title: 'Tools, equipments',
      selected: false
    },
    {
      id: 6,
      title: 'Sports and outdoor',
      selected: false
    },
    {
      id: 7,
      title: 'Animal and pets',
      selected: false
    },
    {
      id: 8,
      title: 'Machinery tools',
      selected: false
    },
    {
      id: 9,
      title: 'More category',
      selected: false
    },
  ]

  const [mainSec_item, setMainSec_item] = useState(ms_item_base)

  const switch_selected_items = (item) => {
    const i = ms_item_base.find((e) => {
      return e?.id === item?.id
    })

    const updatedItems = ms_item_base.map((element) => {
      if (element.id === i.id) {
        return {
          ...element,
          selected: true
        };
      } else if (element.selected == true) {
        return {
          ...element,
          selected: false
        };
      } else {
        return element;
      }
    });

    setMainSec_item(updatedItems);
  }

  return (
    <div className='home_main_body main_padding'>
      <Navbar />
      {/* Main Section */}
      <div className='home_main_section soft_shadow'>
        {/* Main Sections Menu */}
        <div className='home_main_section_menu'>
          {mainSec_item.map((item) => (
            <div onClick={() => switch_selected_items(item)} key={item.id} className={`home_main_section_menu_item ${item.selected ? "select" : ""}`}>
              <p>{item?.title}</p>
            </div>
          ))}
        </div>
        {/* Main Sections Banner */}
        <div className='home_main_section_banner soft_shadow'>
          <h1 className='home_main_section_banner_title'>Latest Trending</h1>
          <p className='home_main_section_banner_parag'>Electronic items</p>
          <button className='home_main_section_banner_button'>Learn More</button>
        </div>
        {/* More Right Sectio */}
        <div className='home_main_section_more'>
          <div className="home_main_section_more_top">
            <div className="home_main_section_more_top_user">
              <img src={require("../Assets/user_profile_def.png")} alt="" className='home_main_section_more_top_user_image'/>
              <p className='home_main_section_more_top_user_text'>Hi, user<br/>let’s get stated</p>
            </div>
            <button className='home_main_section_more_top_join'>Join now</button>
            <button className='home_main_section_more_top_login'>Log in</button>
          </div>
          <div className="home_main_section_more_middle"><p className='home_main_section_more_middle_text'>Get US $10 off with a new supplier</p></div>
          <div className="home_main_section_more_bottom"><p className='home_main_section_more_bottom_text'>Send quotes with supplier preferences</p></div>
        </div>
      </div>
    </div>
  )
}

export default Home