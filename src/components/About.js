import React from 'react';
import { motion } from 'framer-motion';

export default function About(){
  return (
    <section id="about" className="about container">
      <motion.h2 initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} style={{textAlign:'center',fontSize:28,color:'var(--brand-blue)'}}>About</motion.h2>
      <p style={{textAlign:'center',color:'var(--muted)'}}>Application Techno is a founder-led team building production-ready web applications.</p>

      <div style={{marginTop:16,display:'flex',gap:16,flexWrap:'wrap'}}>
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} className="card" style={{flex:1,minWidth:220}}>
          <div style={{fontWeight:800}}>Founder</div>
          <div className="small">Rahul Garg</div>
        </motion.div>
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.12,duration:0.6}} className="card" style={{flex:1,minWidth:220}}>
          <div style={{fontWeight:800}}>Mission</div>
          <div className="small">Deliver delightful web products for startups and builders.</div>
        </motion.div>
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.24,duration:0.6}} className="card" style={{flex:1,minWidth:220}}>
          <div style={{fontWeight:800}}>Approach</div>
          <div className="small">Iterate fast — test early — ship confidently.</div>
        </motion.div>
      </div>

      <div className="counters" style={{marginTop:18}}>
        <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} className="counter">
          <div className="num">12+</div>
          <div className="small">Projects</div>
        </motion.div>
        <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} transition={{delay:0.1}} className="counter">
          <div className="num">8</div>
          <div className="small">Clients</div>
        </motion.div>
        <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} transition={{delay:0.2}} className="counter">
          <div className="num">4</div>
          <div className="small">Years</div>
        </motion.div>
      </div>
    </section>
  )
}
