import React from "react";
import StyleHomeFifthSection from "./style.ts";

const HomeFifthSection = () => {
  return (
    <StyleHomeFifthSection>
      <div className="flexCenter">
        <div className="flexColStart section-container">
          <h1 className="title">Entre em contato</h1>
          <p className="description">
            Você pode nos contatar enviando e-mail abaixo ou através de nossos
            canais do nosso <b>OmniChannel</b> caso já seja usuário.
          </p>
        </div>

        <div className="flexCenter contact-box">
          <form className="flexCenter form">
            <div className="flexCenter input-container">
              <input
                type="text"
                className="input"
                placeholder="Nome completo"
              />
              <input type="text" className="input" placeholder="E-mail" />
            </div>
            <input type="text" className="input" placeholder="Assunto" />
            <textarea
              className="textarea"
              id=""
              cols="60"
              rows="10"
              placeholder="Mensagem"
            ></textarea>
            <button className="button">Enviar</button>
          </form>

          <div className="flexColCenter address">
            <span className="address-title">Para visitas</span >
            <div className="flexCenter adress-container">
              <div className="flexColStart adress-subcontainer">
                <span className="adress-subcontainer-title">Endereço:</span>
                <span className="adress-subcontainer-description">
                  Rua Idalina Pereira dos Santos, 67- 7º andar | Agronômica
                  Florianópolis/SC | CEP 88025-260
                </span>
              </div>

              <div className="flexColStart adress-subcontainer">
                <span className="adress-subcontainer-title">Fone:</span>
                <span className="adress-subcontainer-description">
                  (48) 3333-4840
                </span>
              </div>

              <div className="flexColStart adress-subcontainer">
                <span className="adress-subcontainer-title">E-mail:</span>
                <span className="adress-subcontainer-description">
                  utech@utech.com.br
                </span>
              </div>

              <div className="flexColStart adress-subcontainer">
                <span className="adress-subcontainer-title">Horário:</span>
                <span className="adress-subcontainer-description">
                  Segunda à sexta: 8h00 às 18h30
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleHomeFifthSection>
  );
};

export default HomeFifthSection;
