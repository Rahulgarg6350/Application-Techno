import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Paintbrush, Zap } from 'lucide-react';

const items = [
  {title:'Frontend Development',desc:'React, interactive UI, accessibility',icon:<Code size={24}/>},
  {title:'Backend & APIs',desc:'Node.js, Express, scalable endpoints',icon:<Server size={24}/>},
  {title:'Design & Prototype',desc:'UI/UX, Figma to code, design systems',icon:<Paintbrush size={24}/>},
  {title:'Performance',desc:'Lighthouse audits, code-splitting',icon:<Zap size={24}/>}
];

export default function Services(){
  return (
    <section id="services" className="services container">
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} style={{textAlign:'center',fontSize:28,color:'var(--brand-blue)'}}>Services</motion.h2>
      <p style={{textAlign:'center',color:'var(--muted)'}}>What we build — interactive, maintainable, and fast.</p>

      <div style={{marginTop:18}} className="services-grid">
        {items.map((it,i)=> (
          <motion.div key={i} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.12}} className="card">
            <div className="icon" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div className="card-icon">{it.icon}</div>
            </div>
            <h3 style={{margin:'8px 0 6px'}}>{it.title}</h3>
            <p style={{color:'var(--muted)'}}>{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
