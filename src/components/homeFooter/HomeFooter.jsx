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
            <a
              target="_blank"
              className="flexCenter"
              href="https://play.google.com/store/games?hl=pt_BR&gl=US&pli=1"
            >
              <img className="image" src="./img/playstore.png" alt="" />
            </a>
            <a
              target="_blank"
              className="flexCenter"
              href="https://www.apple.com/br/app-store/"
            >
              <img className="image" src="./img/appstore.png" alt="" />
            </a>
          </div>
          <div className="flexCenter footer-info-container">
            <div className="flexEnd footer-container">
              <div className="flexColCenter">
                <h4 className="footer-container-subtitle">Nossos parceiros</h4>
                <img
                  className="image-partners"
                  src="./img/partners.png"
                  alt=""
                />
              </div>
              <div className="flexColCenter">
                <h4 className="footer-container-subtitle">
                  uClimate Tecnologia - Soluções em climas
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
