import React from "react";
import durbin from "./images/image 4.svg";
import products from "./images/Products.png";
import './App.css'
function Topbar() {
  return (
    <div>
      <div >
        <img src={durbin} alt="" className="durbin"/>
		
		
      </div>
	  <p className="products">Products</p>
		<p className="clients">Clients</p>
		<p className="partner">Partner</p>
		<p className="career">Career</p>
		<p className="about">About</p>
		<div className="rec"></div>
		<p className="signup">Sign Up</p>
     
    </div>
  );
}

export default Topbar;
