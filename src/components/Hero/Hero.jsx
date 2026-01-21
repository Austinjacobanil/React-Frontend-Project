// import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
// import { Link } from 'react-scroll'
import { Link as RouterLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Pure. Fresh. Essential. Quenching your thirst for life</h1>
            <p>Experience the essence of purity with every drop. At Water Company, we deliver crystal-clear, refreshing mineral water, sourced from nature and packed with care to keep you hydrated and healthy. Because nothing is more essential to life than clean, pure water.</p>
            {/* <button className='btn'>Get Started <img src={dark_arrow} alt="" /></button> */}
            {/* <Link to='shop' smooth={true} offset={-150} duration={500}className='btn'>Get Started <img src={dark_arrow} alt="" /></Link> */}
            <RouterLink to="/shop" className='btn'>Get Started <img src={dark_arrow} alt="" /></RouterLink>
        </div>
    </div>
  )
}

export default Hero