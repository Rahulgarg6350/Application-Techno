import React from 'react';
import { motion } from 'framer-motion';

export default function Hero(){
  return (
    <section className="hero">
      <div className="container hero-inner">
        <motion.div className="hero-card" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
          <h1>We build interactive, production-ready web applications</h1>
          <p style={{marginTop:8}}>Application Techno delivers polished React apps, robust APIs, and delightful UX.</p>

          <div className="hero-cta">
            <a href="#contact" className="btn-primary">Hire us</a>
            <a href="#portfolio" className="btn-secondary">See portfolio</a>
          </div>
        </motion.div>

        <motion.aside initial={{opacity:0,scale:0.98}} animate={{opacity:1,scale:1}} transition={{delay:0.15,duration:0.9}}>
          <div className="hero-card">
            <h3 style={{marginTop:0}}>Live focus</h3>
            <p style={{color:'var(--muted)'}}>Interactive UI, performance tuning, and reliable deliveries.</p>
            <div style={{display:'flex',gap:8,marginTop:12}}>
              <div style={{background:'#fff',padding:'8px 12px',borderRadius:10}}>React</div>
              <div style={{background:'#fff',padding:'8px 12px',borderRadius:10}}>Node</div>
              <div style={{background:'#fff',padding:'8px 12px',borderRadius:10}}>APIs</div>
            </div>
          </div>

          <div style={{height:18}} />

          <div className="hero-card">
            <h4 style={{marginTop:0}}>Quick Quote</h4>
            <p style={{color:'var(--muted)'}}>Share your idea — get a free estimate within 24 hours.</p>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
