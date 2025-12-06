import React from 'react';

export default function Footer(){
  return (
    <footer>
      <div className="container">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12}}>
          <div>© {new Date().getFullYear()} Application Techno — Rahul Garg</div>
          <div style={{color:'var(--muted)'}}>:-Built with React-:</div>
        </div>
      </div>
    </footer>
  )
}
