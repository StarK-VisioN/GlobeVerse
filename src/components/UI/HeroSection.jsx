import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function HeroSection() {
  return (
    <main className='hero-section main'>

      <div className='container grid grid-two-cols'>      {/* This is a parent div -> inside which i have 2 div   i.e. 1. left side(content) & 2. right side (img) */}
        
        {/* Left side -> content section */}
        <div className='hero-content'>
          <h1 className='heading-xl'>
            Embark on a Journey Across the Globe
          </h1>
          <p className='paragraph'>
            Uncover the rich history, vibrant culture, and unique beauty of every country. Effortlessly search, sort, and filter to explore the nations that captivate your curiosity.
          </p>
          <NavLink to="/country">
          <button className='btn btn-darken btn-inline bg-white-box'>
            Start Exploring <FaLongArrowAltRight />
          </button>
          </NavLink>
        </div>
        
        {/* Right side -> image section */}
        <div className='hero-image'>
          <img src="/images/world.jpg" alt="world beauty" className='banner-image'/>
        </div>

      </div>
    </main>
  )
}

export default HeroSection