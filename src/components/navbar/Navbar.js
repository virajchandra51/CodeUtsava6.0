import React from 'react'
import './Navbar.css';
import codeutsava from "../../assets/images/codeutsava.png";
import tcp from "../../assets/images/tcp.png";

const Navbar = () => {
  return (
    <div className={`codeutsava__navbar`}>
      <div className={`codeutsava__navbar-body`}>
          <div className='codeutsava__navbar-logo'>
            <img src={codeutsava} className='codeutsava__navbar-logo'/>
          </div>
          <div className='codeutsava__navbar-menu'>
          <a><div className='codeutsava__navbar-menu-heading'>
                  Home
              </div></a>
          <a href='#aboutus'><div className='codeutsava__navbar-menu-heading'>
                  About Us
              </div></a>  
          <a href='#events'><div className='codeutsava__navbar-menu-heading'>
                  Events
              </div></a>
          <a href='#speakers'><div className='codeutsava__navbar-menu-heading'>
                  Speakers
              </div></a>
          <a href='#sponsers'><div className='codeutsava__navbar-menu-heading'>
                  Sponsors
              </div></a>
          <a href='#faq'><div className='codeutsava__navbar-menu-heading'>
              FAQ
              </div></a>
              <div className='codeutsava__navbar-menu-heading'>
                  Contact Us
              </div>

          </div>
          <div className='codeutsava__navbar-logo'>
            <img src={tcp} className='codeutsava__navbar-logo'/>
          </div>
      </div>

    </div>
  )
}

export default Navbar
