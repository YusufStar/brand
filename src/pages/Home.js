import React, { useEffect, useState } from 'react'
import "../Style/home.css"
import Navbar from '../Components/Navbar'
import BlockItem from '../Components/BlockItem'
import { products } from "../data"
import searchSvg from "../Assets/icons/control/search.svg"
import inventorySvg from "../Assets/icons/inventory_2.svg"
import sendSvg from "../Assets/icons/control/send.svg"
import secureSvg from "../Assets/icons/security.svg"


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

  const extra_services = [
    {
      "id": 1,
      "title": "Source from Indostry Hubs",
      "thumb": "https://s3-alpha-sig.figma.com/img/b564/a957/ce3a966c5d76f6c21ddcaeba336dd251?Expires=1682294400&Signature=SQ7QpPSYV19vvu6gk4FdQH2HJbfND5lIbjg0R~5GP42zFG9uZJZ07TrQ~4gAdzaK8DagCgiykybe00-7LnHVs~PECusjFKtDV2iiRHLchx7GWaPZfC31OOVwSuYvBLH3EFll0debp00TKVud4iCUEecTf3z6ZCcmvsYDNWqclRfXXJNYzHb4ocJmgAGiFL3boNcBboN8tCsmWGBi~qYzD47yF9bKHXowZ-uRg5oAx4fG5U009~Wa3BsMeVolyjObYetY-gh8NzS6zWWxObUBdAlnQzmJkg3fPz7NT4sTGdVPG~M-pokcwepaBwM6VMsD9Wm1jTdteRvoA52a5JBpNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "icon": searchSvg
    },
    {

      "id": 2,
      "title": "Customize Your Products",
      "thumb": "https://s3-alpha-sig.figma.com/img/4b08/c60c/3829236b56ad902eb0d7bc9954d83888?Expires=1682294400&Signature=cS2RSV3ClY9dLgMdOxZOXqA4RH27TNxYorKAejm-WWdzp7Imigtk~1~jDCr-LE8loXZ4tkUxgaoT4OQvE-gS4okn71jtU7CumSC~BnEU7KUV-c21a6idCImcQ1MAizjyIxaZM~4pUEiK9FEhk~-xTp6lApt0WLF-TTldlqQmOH~WzNEYcxxcOakf39rVh6vvqIj816A9BpR-JvMeRkF0HD~23TU0AiDAGnX~fPahE7FvtgCpB1acatC3QfyfvYJkMVvDpVMtyYS1ZFuB7dpebz3MBB~dSe8n6QEUghA1PflD~u1H0qwwA~-k6Vr1F8vgZtmpNhuOkJdvJ-6mbEQ6AQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "icon": inventorySvg
    },
    {

      "id": 3,
      "title": "Fast reliable shipping by ocean or air",
      "thumb": "https://s3-alpha-sig.figma.com/img/1d9d/9dbe/3e097f229ff7711c3aefb5b0673a2278?Expires=1682294400&Signature=E4C7ffNhGnQZ2m3dnvpyTbXGQfXkubOIxfysMf9-uNg4M7hod~jKwhdyiT-tiEqaixwtIQ987x0ZaFG8VkKOq4GThuk3Ymw9wvSisaa-QRMmk1t5vW7H8YjprarVbWoIYfrFQvcTc0cW-yLsvJOkyjHArSk4zGnO9XAF6bBDdrGXKSlybED1M-pM~FlYk16zHP-ddzDEdtI20nCsppZ21Z1YfvCFk78wbqBi3tI0p7PFN8IHXHdXMrWyp-flAhv9pDpnbaIU76cIuS19LfkweVuEfyujpe0MAT~IvBZgguWQg2~RawGW51Oa3okQDjhmPUT1LujzxoBmGukK8NbHUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "icon": sendSvg
    },
    {

      "id": 4,
      "title": "product monitorin and inspection",
      "thumb": "https://s3-alpha-sig.figma.com/img/0c52/058c/7fecb736fb193ed3a0a046668cf87a58?Expires=1682294400&Signature=OBAVsML2FOhy28zP8iml6Fh~cbJXAfULe-QgvqiUNJI-zhOhxJ4YXiEWHGMiHo4qhsh21CcY-Qlox28tAcm7nkyL54XNAGRGz9VSIn6LTWI0S7uikfyj0WFU9dlFJV-g1D0BrKKCPyBSxa-Upx1I-EI~Bh-BasPDm-8p8FxEbVh7xKGkaFa4B-EJkYrAVat5QxQ2rYu~Z4Trs2B4Ws2cdTAKEGwvSWa7zVRGpyUoUDr3ptULHKKZd1NsNz0gDzbxcDtdFyAeu~aBboQ5tIUhDiin1OZLaQbsCzjMCkDH42EqNd9StCLWqzqDJ1TNPUWWvpiONyPW2exwAnHK11UMfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "icon": secureSvg
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
    const p = products.filter((i) => { return i.up_category == st.toLowerCase() })
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
      <BlockItem products={getProductsInCategory("home")} title={"Home and outdoor"} thumb={require("../Assets/thumb/02.png")} />
      <BlockItem products={getProductsInCategory("electronics")} title={"electronics"} thumb={require("../Assets/thumb/01.png")} />

      {/* inquiry Section */}
      <div className='home_inquiry_section'>
        <div className="home_inquiry_section_title">
          <h1 className='home_inquiry_section_title_text'>An easy way to send requests to all suppliers</h1>
          <p className='home_inquiry_section_title_parag'>Get multiple quotes within 24 hours!</p>
        </div>
      </div>

      {/* Recommended Items Section */}
      <div className='home_recommended_items_section'>
        <h1 className="home_recommended_items_section_title">Recommended items</h1>
        <div className="home_recommended_items_section_items">
          {products.filter((item) => {
            return item.recommend
          }).map((item) => {
            console.log(products.filter((item) => {
              return item.recommend
            }))
            return (
              <div className="home_recommended_items_section_item soft_shadow">
                <img src={item.thumbnail} alt={item.title} className='home_recommended_items_section_item_thumb' />
                <div className="home_recommended_items_section_item_detail">
                  <p className='home_recommended_items_section_item_price'>$ {item.price}</p>
                  <p className='home_recommended_items_section_item_text'>
                    <span className='home_recommended_items_section_item_text_brand'>{item.brand}</span>
                    <span className='home_recommended_items_section_item_text_category'>{item.category}</span>
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Our Extra Services */}
      <div className='home_extra_services_section'>
        <h1 className='home_extra_services_section_title_header'>Our extra services</h1>
        <div className="home_extra_services_section_items">
          {extra_services.map((item) => (
            <div className="home_extra_services_section_item">
              <div style={{
                background: `linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${item.thumb})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }} className="home_extra_services_section_item_up" />
              <div className="home_extra_services_section_item_down">
                <p className='home_extra_services_section_item_down_title'>{item.title}</p>
                <span className='home_extra_services_section_item_down_icon'>
                  <img src={item.icon} /></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home