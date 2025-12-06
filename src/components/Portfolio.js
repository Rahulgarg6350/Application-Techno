import React, {useState} from 'react';
import { motion } from 'framer-motion';

const projects = [
  {id:1,title:'Dashboard App',desc:'Admin dashboard with analytics and real-time charts.'},
  {id:2,title:'E-commerce UI',desc:'Checkout flows, cart UX and product pages.'},
  {id:3,title:'Realtime Chat',desc:'Socket-based chat with notifications.'},
  {id:4,title:'Portfolio Site',desc:'Marketing site with CMS integration.'}
];

export default function Portfolio(){
  const [open,setOpen] = useState(null);
  return (
    <section id="portfolio" className="portfolio container">
      <motion.h2 initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} style={{textAlign:'center',fontSize:28,color:'var(--brand-blue)'}}>Portfolio</motion.h2>
      <p style={{textAlign:'center',color:'var(--muted)'}}>Selected work — click to preview</p>

      <div style={{marginTop:16}} className="grid">
        {projects.map((p,i)=> (
          <motion.div key={p.id} whileHover={{scale:1.03}} onClick={()=>setOpen(p)} className="project" style={{padding:14}}>
            <div className="thumb">{p.title.split(' ')[0]}</div>
            <div className="meta">
              <div style={{fontWeight:800}}>{p.title}</div>
              <div style={{color:'var(--muted)',fontSize:13}}>{p.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {open && (
        <div className="modal-backdrop" onClick={()=>setOpen(null)}>
          <motion.div className="modal" onClick={e=>e.stopPropagation()} initial={{scale:0.96,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.24}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div style={{fontWeight:800,fontSize:18}}>{open.title}</div>
              <button onClick={()=>setOpen(null)} className="btn-primary" style={{background:'#eee',color:'#333'}}>Close</button>
            </div>
            <div style={{marginTop:12,color:'var(--muted)'}}>{open.desc}</div>
            <div style={{height:18}} />
            <div style={{height:300,borderRadius:10,background:'linear-gradient(135deg,#f6fbff,#eef7ff)'}} />
          </motion.div>
        </div>
      )}
    </section>
  )
}
