import React from 'react'
import { useState } from 'react'
import "./Navbar.css"
import nbnwLogoWhite from "../../Images/nbnw-logo-white.png"
import nbnwLogo from "../../Images/nbnw-logo.png"

export const Navbar = () => {

  //I have created two logos for 'NBNW News'. One is for dark background and another is for light background.
  //Here the default logo is for the dark-background
  const [logo, setLogo] = useState(nbnwLogoWhite);

  //I want the logo to change its color whenever the mouse is hovered over the logo div. I was unable to do it with css. Hence, I use the onMouseOver and onMouseLeave function to change the logo.
  function handleMouseIn(){
    setLogo(nbnwLogo);
  }

  function handleMouseLeave(){
    setLogo(nbnwLogoWhite);
  }

  return (
    <nav className="container">
        <a href="/" className='homepageBtn' onMouseOver={handleMouseIn} onMouseLeave={handleMouseLeave}>
          <img src={logo} alt="nbnw logo" className='logo'/>
        </a>
        <h1 className='title'>NBNW News</h1>
        {/* The href = "#about" will take the user to the about section of the page whenver the about button is clicked. */}
        <a href='#about' className='about'>
          About
        </a>
    </nav>
  )
}
