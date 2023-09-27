import React from "react";
import StyledCookiesModal from "./style.ts";

const CookiesModal = (props) => {
  return (
    <StyledCookiesModal>
      <div className="flexCenter cookies-modal-wrapper">
        <div className="flexColStart cookies-modal-container">
          <h2 className="cookies-modal-container-title">
            ESTE SITE UTILIZA COOKIES
          </h2>
          <span className="cookies-modal-container-paragraph">
            Usamos cookies para garantir que você tenha a melhor experiência
            possível enquanto navega.
          </span>
          <span className="cookies-modal-container-paragraph">
            Ao clicar em "Aceitar", você está dando seu consentimento para que
            usemos os cookies. Caso deseje, você pode gerenciar suas
            preferências de cookies nas configurações do seu navegador a
            qualquer momento.
          </span>
          <span className="cookies-modal-container-paragraph">
            Agradecemos por sua compreensão e aproveite ao máximo sua navegação
            em nosso site!
          </span>
          <div className="flexCenter cookies-modal-buttons-container">
            <button
              onClick={() => props.setIsCookiesModalOpened(false)}
              className="cookies-modal-accept-button"
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </StyledCookiesModal>
  );
};

export default CookiesModal;
