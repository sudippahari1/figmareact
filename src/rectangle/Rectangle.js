import React from "react";
import "./Rectangle.css";
import vector from "../images/Vector.svg";
import back from "../images/image 10.svg";
import front from "../images/image 9.svg";
import vec1 from "../images/Vector1.svg";
import vec2 from "../images/Vector2.svg";
import vec3 from "../images/Vector3.svg";
import vec4 from "../images/Vector4.svg";
import vec5 from "../images/Vector5.svg";

function Rectangle() {
  return (
    <>
      <div className="rectangle44">
        <img src={vector} alt="" className="vector" />
        <p className="real">Real-time Data</p>
      </div>

      <div className="rectangle441">
        <img src={vec1} alt="" className="vec1" />
		<p className="real">Low-latency</p>
      </div>

      <div className="rectangle443">
        <img src={vec2} alt="" className="vec2" />
		<p className="real">End-to-end encrypted</p>
      </div>

      <div className="rectan444">
		<img src={vec3} alt="" className="vec3"/>
		<p className="real">Real-time Data</p>
	  </div>

      <div className="rectangle445">
		<img src={vec4} alt="" className="vec4" />
		<p className="real">OTA Updates</p>
	  </div>
      <div className="rectangle446">
		<img src={vec5} alt="" className="vec5" />
		<p className="real">Advanced Integrations</p>
	  </div>
      <div className="longRectan">
      

	  </div>

      <div>
        <img src={back} alt="" className="backGround" />
        <img src={front} alt="" className="front" />
      </div>
      <p className="contact">Contact Us</p>
      <p className="name">x</p>
      <p className="name2">Ingest</p>
      <p className="des">Your devices on a single pane of glass</p>
    </>
  );
}

export default Rectangle;
