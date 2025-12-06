import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar(){
  return (
    <motion.header initial={{y:-20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.6}} className="nav">
      <div className="container" style={{display:'flex',alignItems:'center',gap:16}}>
        <div className="brand" style={{display:'flex',alignItems:'center',gap:12}}>
          <div className="logo">AT</div>
          <div style={{lineHeight:1}}>
            <div style={{fontWeight:800}}>Application Techno</div>
          </div>
        </div>

        <nav style={{marginLeft:'auto'}} className="nav-links">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-cta">Get in touch</a>
        </nav>
      </div>
    </motion.header>
  )
}
