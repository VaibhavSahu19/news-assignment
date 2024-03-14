import React from 'react'
import "./About.css"

//Created an additional component named 'About'. This component describes the 'NBNW News Organization'.
export const About = () => {
  return (
    <footer className='about-container' id='about'>
        <h2 className='about-title'>About us</h2>
        <h4 className='about-headline'>Welcome to nbnw.org – Your Source for Balanced News Reporting</h4>
        <p className='about-content'>We are passionate about journalism that is fair, balanced, and free from bias. Our dedicated team of journalists and editors work tirelessly to provide you with accurate and objective news, so you can make informed decisions.</p>
        <p className='about-content'>At NBNW, our mission is to elevate the standards of news coverage by delivering unbiased and comprehensive reporting that represents both sides of the story. We believe there is always, two sides of story.</p>
        <div className='contact'>
            <a href="https://www.linkedin.com/company/nbnw-org/">Connect With Us!!</a>
        </div>
    </footer>
  )
}
