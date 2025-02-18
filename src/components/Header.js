import React from "react";
import "../../src/App.css";
import img1 from "../../src/img/cescar128.png";
import img2 from "../../src/img/minerd128.png";

const Header = () => {
  return (
    <div className="row" style={{ height: "200px" }}>
      <div className="navbar navbar-expand-sm navbar-dark" style={{flexWrap: "nowrap"}}>
	  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
	  <div className="collapse justify-content-center navbar-collapse" id="collapsibleNavbar" style={{ fontFamily: "Arial" }}>
        <div className="p-4 text-center ">
		<h3>
          <strong>Arquidiócesis de santo domingo</strong>
        </h3>
        <h4>
          <strong>Centro Educativo Santo Cura de Ars (CESCAR)</strong>
        </h4>
        <h5>
          <strong>Gestión Curricular 2024 – 2028</strong>
        </h5>
        <h6>
          <strong>Coordinación TIC's</strong>
        </h6>
		</div>
      </div>
	  </div>
      <div className="flip-img">
        <div className="ang-logo flip-img-inner">
          <img
            className="flip-img-front rounded-circle shadow-lg"
            src={img2}
            alt="cescar"
          />
          <img
            className="flip-img-back rounded-circle shadow-lg"
            src={img1}
            alt="minerd"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
