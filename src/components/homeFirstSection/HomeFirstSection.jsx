import React from "react";
import StyleHomeFirstSection from "./style.ts";
import { useNavigate } from "react-router-dom";

const HomeFirstSection = () => {
  const navigate = useNavigate();

  return (
    <StyleHomeFirstSection>
      <div className="flexCenter section">
        <div className="flexColStart section-container">
          <h1 className="title">uClimate App</h1>
          <h1 className="subtitle">para previsão</h1>
          <h1 className="subtitle">do tempo</h1>
          <button onClick={() => navigate("/previsao-florianopolis")} className="button">
            Teste já com a cidade de Florianópolis
          </button>
          <p className="text">
            Há 5 anos, facilitando sua rotina preparando-o para as intempéries
            do clima.
          </p>
        </div>
        <img
          className="home-phone-image"
          src="./img/iphone-screen.png"
          alt=""
        />
      </div>
    </StyleHomeFirstSection>
  );
};

export default HomeFirstSection;
