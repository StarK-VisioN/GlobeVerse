import React from 'react'
import Header from '../UI/Header'
import Footer from '../UI/Footer'
import { Outlet } from 'react-router-dom'

function layout() {
  return (
    <>
    
    <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src="https://videos.pexels.com/video-files/5818973/5818973-sd_640_360_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

        <Header/>
        <Outlet/>
        <Footer/>
    </>
    
  )
}

export default layout