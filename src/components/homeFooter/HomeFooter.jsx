import React from "react";
import StyleHomeFooter from "./style.ts";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const HomeFooter = () => {
  return (
    <StyleHomeFooter>
      <div className="flexCenter section">
        <div className="flexColCenter section-container">
          <h2 className="title">Baixe agora o uClimate App</h2>
          <div className="flexCenter images-container">
            <img className="image" src="./img/playstore.png" alt="" />
            <img className="image" src="./img/appstore.png" alt="" />
          </div>
          <div className="flexCenter footer-info-container">
            <div className="flexCenter footer-container">
              <div className="flexColCenter">
                <h4 className="footer-container-subtitle">Nossos parceiros</h4>
                <img
                  className="image-partners"
                  src="./img/partners.png"
                  alt=""
                />
              </div>
              <div className="flexColCenter">
                <img
                  className="image-utech"
                  src="./img/utech-footer.png"
                  alt=""
                />
                <h4 className="footer-container-subtitle">
                  uTech Tecnologia - Soluções em Segurança e Telefonia
                </h4>
              </div>
              <div className="flexColCenter social-media-container">
                <div className="flexCenter social-media-subcontainer">
                  <AiFillFacebook />
                  <AiFillLinkedin />
                  <AiFillYoutube />
                  <AiOutlineInstagram />
                </div>
                <h4 className="footer-container-subtitle">
                  Acompanhe-nos em nossas redes
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleHomeFooter>
  );
};

export default HomeFooter;
