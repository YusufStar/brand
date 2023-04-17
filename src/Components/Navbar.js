import React, { useState } from 'react'
import "../Style/navbar.css"
import profile from "../Assets/icons/Profile.svg"
import cart from "../Assets/icons/Cart.svg"
import messages from "../Assets/icons/Messages.svg"
import orders from "../Assets/icons/Orders.svg"
import { all_categories, products } from "../data"
import { useNavigate } from 'react-router'
import algoliasearch from "algoliasearch"
const client = algoliasearch("Q0WZQ1VIOY", "e9f0269ee868018024454edcc2cfe337");
const index = client.initIndex("products");


const Navbar = ({ curretnSearch = "" }) => {
    const [SearchItemsShow, setSearchItemsShow] = useState(false)
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState(curretnSearch)
    const [SuggestedItems, setSuggestedItems] = useState([])
    const [curcategory, setCurcategory] = useState("")

    async function calculateSuggestions(query) {
        // Algolia arama isteği yaparak eşleşen öğeleri al
        let algoliaResults = await index.search(query);
        algoliaResults = await index.search(curcategory);

        // Algolia sonuçlarını "suggestions" değişkenine formatla
        const suggestions = algoliaResults.hits.map(hit => ({
            title: hit.title,
            image: hit.thumbnail,
        }));

        return suggestions;
    }

    async function handleChange(query) {
        setSearchTerm(query);
        SearchItemsShow(true)

        if (query) {
            const results = await calculateSuggestions(query);
            setSuggestedItems(results);
        } else {
            setSuggestedItems([]);
        }
    }

    function handleSubmit(e, isForm, cstSearch) {
        if (searchTerm !== "") {
            if(isForm) e.preventDefault()
                const cat = all_categories.filter((c) => {
                    return c.title.toLowerCase() === curcategory.toLowerCase()
                })[0]?.cid
                if (cat) {
                    navigate(`/category/${cat}/search/${cstSearch ? cstSearch : searchTerm}`)
                } else {
                    navigate(`/search/${cstSearch ? cstSearch : searchTerm}`)
                }
        }
    }

    return (
        <div className='navbar_main'>
            <img src={require("../Assets/logo_variants/colored.png")} />
            <form onSubmit={(e) => handleSubmit(e, true)} className="navbar_search">
                <input
                    value={searchTerm}
                    onChange={(e) => handleChange(e.target.value)}
                    onFocus={() => setSearchItemsShow(true)}
                    placeholder='Ara'
                    type="text"
                    className='navbar_search_input' />
                {/* navbar search products auto complate */}
                <div className="navbar_search_products" onMouseOut={() => setSearchItemsShow(false)} onMouseOver={() => setSearchItemsShow(true)} style={{
                    height: SearchItemsShow && searchTerm !== "" ? "250px" : "0px",
                }}>
                    {SuggestedItems.map((item) => <div onClick={(e) => {
                        setSearchTerm(item.title)
                        handleSubmit(e, false, item.title)
                    }} className="navbar_search_product">
                        <img src={item.image} alt={item.title} className='navbar_search_product_image' />
                        <p className='navbar_search_product_title'>{item.title}</p>
                    </div>)}
                </div>
                <select
                    onChange={(e) => setCurcategory(e.target.value)}
                    className='navbar_search_category'>
                    <option value="" className='navbar_search_category_option'>All Category</option>
                    {all_categories.map((cat) => <option value={cat.title} className='navbar_search_category_option'>{cat.title}</option>)}
                </select>
                <button className='navbar_search_submit_btn'>Ara</button>
            </form>
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