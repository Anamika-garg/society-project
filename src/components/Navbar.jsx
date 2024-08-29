import React from 'react';
import logo from '/logo.jpg';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="nav">
        <ul className="logoSec">
            <li className="logo">
              <img src={logo} alt="" />
            </li>
        </ul>
        <ul className="navItems">
            <li><a href="https://chat.whatsapp.com/BjavpQevWHPI2uMNy5p3C4" target="_blank"><FaWhatsapp className='linkStyle' /> </a></li>
            <li><a href="https://www.instagram.com/assetmerkle.igdtuw/" target='_blank'><FaInstagram className='linkStyle'/></a></li>
        </ul>
    </nav>
  )
}

export default Navbar