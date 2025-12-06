import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

const data = [
  {name:'Amit',text:'Great delivery and very clean code.'},
  {name:'Sana',text:'Clear communication and fast turnaround.'},
  {name:'Dev',text:'Solid tests and helpful documentation.'}
];

export default function Testimonials(){
  const [i,setI] = useState(0);
  useEffect(()=>{const t=setInterval(()=>setI(x=> (x+1)%data.length),3600);return ()=>clearInterval(t)},[]);
  return (
    <section className="testimonials container">
      <motion.h2 initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} style={{textAlign:'center',fontSize:28,color:'var(--brand-blue)'}}>Testimonials</motion.h2>
      <div style={{marginTop:12}}>
        <motion.div key={i} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.4}} className="testimonial">
          <div style={{fontWeight:800}}>{data[i].name}</div>
          <div style={{color:'var(--muted)'}}>&quot;{data[i].text}&quot;</div>
        </motion.div>
      </div>
    </section>
  )
}
