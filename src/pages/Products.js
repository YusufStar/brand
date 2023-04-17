import React from 'react'
import { all_categories, products } from '../data'
import { useParams } from 'react-router'
import Navbar from "../Components/Navbar"
import Path from '../Components/Path'

const Products = ({ Iscategory }) => {
  const { cid, searchTerm } = useParams()

  const cur_cat = all_categories.find((c) => c.cid == cid)
  console.log(cur_cat)

  const cat_title = cur_cat ? cur_cat.title : ""
  const cat_cid = cur_cat ? cur_cat.cid : ""

  const a = products.filter((p) => {
    if (Iscategory) {
      return p.category.replace(/'/g, '').replace(/\s+/g, '-').toLowerCase() === cat_title.replace(/'/g, '').replace(/\s+/g, '-').toLowerCase()
    } else {
      return p
    }
  })

  const cat_products = a.filter((val) => {
    if (searchTerm === "") {
      return val
    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val
    }
  })

  function cat_path () {
    if(Iscategory) {
      return [
        { title: "Home", path: "/" },
        { title: "Products" },
        { title: cat_title, path: `/category/${cat_cid}` },
        { title: searchTerm, path: `/category/${cat_cid}/search/${searchTerm}` },
      ]
    } else {
      return [
        { title: "Home", path: "/" },
        { title: "Products" },
        { title: searchTerm, path: `/category/${cat_cid}/search/${searchTerm}` },
      ]
    }
  }

  return (
    <div className='main_body_el main_padding'>
      <Navbar curretnSearch={searchTerm} />
      <Path pathFunc={cat_path} />
    </div>
  )
}

export default Products