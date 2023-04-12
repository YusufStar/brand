import React from 'react'
import "../Style/blockitem.css"

const BlockItem = ({
    title,
    products,
    thumb,
}) => {
    return (
        <>
            <div className="block_item soft_shadow">
                <div style={{
                    background: `linear-gradient(0deg, rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${thumb})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }} className="block_item_title">
                    <div className="block_item_title_items">
                        <p className='block_item_title_text'>{title}</p>
                        <button className='block_item_button'>Source now</button>
                    </div>
                </div>
                <div className="block_item_products">
                    {products.map((pc) => (
                        <div className='block_item_products_item'>
                            <div className="block_item_products_item_detail">
                                <h1 className='block_item_products_item_name'>{pc.title.slice(0, 22)}</h1>
                                <p className='block_item_products_item_price'>From<br/>USD {pc.price}</p>
                            </div>
                            <img src={pc.thumbnail} alt={pc.title} className='block_item_products_item_image'/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BlockItem