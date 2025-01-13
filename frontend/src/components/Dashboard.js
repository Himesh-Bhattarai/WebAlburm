import { Link } from "react-router-dom";
import React from 'react';
import Entrybar from "./Entrybar";


export default function Dashboard() {
  const dashboardCss = {
    height: "92vh",
    width: "100%",
    backgroundColor: "#060841",
  };

  const middleDiv = {
    height: "90vh",
    width: " 60%"
  };

  return (
    <>
      <Entrybar />
      <div style={dashboardCss} className="HomeContainer">
        <div style={middleDiv} className="textAndImage">
          <h1 className="section-div-h3">
            "Capture, Organize, and Relive Your Memories in One Place"</h1>
          <h5 className="section-div-h5">Join the most intuitive platform to store, manage, and share your digital memories effortlessly.</h5>
          <div className="social-links text-center">
            <Link to="#" className="twitter" target="_blank"><i className="bi bi-twitter-x" ></i></Link>
            <Link to="https://www.linkedin.com/in/himeshchanchal-bhattarai-9687612bb/" target="_blank" className="LinkIN"><i class="bi bi-linkedin"></i></Link>
            <Link to="https://www.instagram.com/himesh.hcb/" target="_blank" className="instagram"><i className="bi bi-instagram"></i></Link>
            <Link to="https://wa.me/9806352021" className="whatsapp" target="_blank"><i className="bi bi-whatsapp"></i></Link>
            <Link to="https://github.com/Himesh-Bhattarai" className="github" target="_blank"><i className="bi bi-github"></i></Link>
          </div>
        </div>


      </div>
    </>
  );
}
