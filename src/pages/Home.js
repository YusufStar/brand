import React, { useEffect, useState } from 'react'
import "../Style/home.css"
import Navbar from '../Components/Navbar'
import BlockItem from '../Components/BlockItem'
import { products } from "../data"

const Home = () => {
  const ms_item_base = [
    {
      "id": 1,
      "title": "Smartphones",
      "thumb": "https://www.apple.com/v/iphone/home/bm/images/overview/compare/compare_iphone_14_pro__cjmfbiggqhpy_large.jpg",
      "selected": true,
      "discount": true,
      "discount_percent": 15
    },
    {
      "id": 2,
      "title": "Laptops",
      "selected": false,
      "discount": false
    },
    {
      "id": 3,
      "title": "Fragrances",
      "selected": false,
      "thumb": "https://cdn.fragrancenet.com/images/photos/200x200/291563.jpg?format=0",
      "discount": true,
      "discount_percent": 21
    },
    {
      "id": 4,
      "title": "Skincare",
      "selected": false,
      "discount": false
    },
    {
      "id": 5,
      "title": "Groceries",
      "thumb": "https://i5.walmartimages.com/asr/a01cc0ea-2520-430f-9201-148c7d0dd070.97ae3ba9dbf8af398962667afff96bc2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      "selected": false,
      "discount": true,
      "discount_percent": 8
    },
    {
      "id": 6,
      "title": "Home dec",
      "thumb": "https://static.athome.com/images/w_800,h_800,c_pad,f_auto,fl_lossy,q_auto/v1638452879/p/124342246/assorted-succulents-with-white-planter-6.jpg",
      "selected": false,
      "discount": true,
      "discount_percent": 13
    },
    {
      "id": 7,
      "title": "Furniture",
      "selected": false,
      "discount": false
    },
    {
      "id": 8,
      "title": "Tops",
      "thumb": "https://www.youshop.com.tr/buyuk-kapusonlu-dikis-detayli-asimetrik-kesim-oversize-simli-you-bluz-fw-2223-you-27699-17-O.jpg",
      "selected": false,
      "discount": true,
      "discount_percent": 4
    },
    {
      "id": 9,
      "title": "Women dr",
      "thumb": "https://n.nordstrommedia.com/id/sr3/96a09bc7-9c64-4d1c-9161-c877b561410d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
      "selected": false,
      "discount": true,
      "discount_percent": 20
    }
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

  const getProductsInCategory = (st = "") => {
    const p = products.filter((i) => {return i.up_category == st.toLowerCase()})
    const slc_p = p.slice(0, 8)
    return slc_p
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
              <img src={require("../Assets/user_profile_def.png")} alt="" className='home_main_section_more_top_user_image' />
              <p className='home_main_section_more_top_user_text'>Hi, user<br />let’s get stated</p>
            </div>
            <button className='home_main_section_more_top_join'>Join now</button>
            <button className='home_main_section_more_top_login'>Log in</button>
          </div>
          <div className="home_main_section_more_middle"><p className='home_main_section_more_middle_text'>Get US $10 off with a new supplier</p></div>
          <div className="home_main_section_more_bottom"><p className='home_main_section_more_bottom_text'>Send quotes with supplier preferences</p></div>
        </div>
      </div>

      {/* Discounted Section */}
      <div className='home_deals_offers_section soft_shadow'>
        {/* Start Section */}
        <div className="home_deals_offers_section_title">
          <h1 className='home_deals_offers_section_title_text'>Discounted Products</h1>
          <div className="home_deals_offers_section_time">
            <p className='home_deals_offers_section_time_parag'>Time Left</p>
            <div className="home_deals_offers_section_time_count">
              <div className="home_deals_offers_section_time_count_item">
                <h4>04</h4>
                <p>Days</p>
              </div>
              <div className="home_deals_offers_section_time_count_item">
                <h4>13</h4>
                <p>Hour</p>
              </div>
              <div className="home_deals_offers_section_time_count_item">
                <h4>34</h4>
                <p>Min</p>
              </div>
              <div className="home_deals_offers_section_time_count_item">
                <h4>56</h4>
                <p>Sec</p>
              </div>
            </div>
          </div>
        </div>
        {/* Discounted Products Section */}
        {mainSec_item.filter((e) => { return e.discount }).map((dcs_pds) => {
          return (
            <div className='home_discounted_products_item'>
              <div style={{
                width: "120px",
                height: "120px",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",

              }}>
                <img src={dcs_pds?.thumb} alt={dcs_pds.title} className='home_discounted_products_item_thumb' />
              </div>
              <div className="home_discounted_products_item_bottom">
                <h1 className='home_discounted_products_item_title'>{dcs_pds.title}</h1>
                <span>-{dcs_pds.discount_percent}%</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Block Gorup Section */}
      <BlockItem 
      products={getProductsInCategory("electronics")} 
      title={"electronics"}
      thumb={require("../Assets/thumb/01.png")}
      />
    </div>
  )
}

export default Home