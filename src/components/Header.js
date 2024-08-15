import React from "react";
import "../../src/App.css";
import  img1 from  "../../src/img/cescar128.png";
import  img2 from  "../../src/img/minerd128.png";

const Header = () => {
      return(
            <div className="row">
             <div className="p-4 text-center" style={{fontFamily: 'Arial'}}>
                <h3><strong>Arquidiócesis de santo domingo</strong></h3>
                <h4><strong>Centro Educativo Santo Cura de Ars (CESCAR)</strong></h4>
                <h5><strong>Gestión Curricular 2024 – 2028</strong></h5>
                <h6><strong>Coordinación TIC's</strong></h6>
            </div>
            <div className="flip-img">
          <div className="ang-logo flip-img-inner">
            <img className="flip-img-front rounded-circle shadow-lg" src={img1} alt="cescar"/>
            <img className="flip-img-back rounded-circle shadow-lg" src={img2} alt="minerd"/>
          </div>
        </div>
        </div>
      )
}

export default Header;