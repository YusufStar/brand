import React from 'react'
import "../Style/home.css"
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div className='home_main_body main_padding'>
      <Navbar/>
        <h1>Home</h1>
    </div>
  )
}

export default Home