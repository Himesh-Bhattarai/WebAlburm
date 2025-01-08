import React, { useEffect } from "react";
import Typed from "typed.js";
import DocNavbar from "./DocNavbar";

export default function Dashboard() {
  const dashboardCss = {
    height: "92vh",
    width: "100%",
    backgroundColor: "#060841",
  };

  const middleDiv = {
    height : "90vh",
    width : "90%"
  };

  useEffect(() => {
    const typed = new Typed("#Elements", {
      strings: ["PHOTOS", "VIDEOS", " COLLECTION",],
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const element = {
    fontSize: "44px",
    color: "#87CEEB",
  };

  return (
    <>
    <DocNavbar />
      <div style={dashboardCss} className="HomeContainer">
        <div style={middleDiv} className="textAndImage">
          <div className="marqueeText">
            <h1 className="section-div-h3">
             WELCOME TO WEB ALBURM...!
            </h1>
            <h1 className="section-div-floattext">
              Here You can Save <span style={element} id="Elements"></span>
            </h1>

            <div className="socialicons">
              <a href="/" aria-label="Facebook">
                <img
                  className="iconPngs"
                  src="icons8-facebook-24.png"
                  alt="Facebook Icon"
                />
              </a>
              <a href="/" aria-label="Instagram">
                <img
                  className="iconPngs"
                  src="icons8-insta-24.png"
                  alt="Instagram Icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
