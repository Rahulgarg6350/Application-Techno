import React from 'react';
export default function ServiceCard({title,desc,icon}){
return (
<div className="service-card">
<div style={{display:'flex',alignItems:'center',gap:12}}>
<div style={{width:44,height:44,borderRadius:8,background:'#f7f9ff',display:'flex',alignItems:'center',justifyContent:'center'}}>{icon}</div>
<div>
<div style={{fontWeight:700}}>{title}</div>
<div style={{fontSize:13,color:'var(--muted)'}}>{desc}</div>
</div>
</div>
</div>
)
}