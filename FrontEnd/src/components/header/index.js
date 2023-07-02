import React from 'react'
import img1 from '../images/abclogo.svg';
import img2 from '../images/hrclogo.svg';
import './styles.css';

export const Header = () => {
return(
  <div className="head" style={{margin:"0.5rem"}}>
      <img  src={img1} />
      <img  style={{marginLeft:"10rem"}} src={img2}/>
      <p style={{ color: "#db4437", fontWeight: "700" }}>Invoice List</p>
  </div>
  )
}