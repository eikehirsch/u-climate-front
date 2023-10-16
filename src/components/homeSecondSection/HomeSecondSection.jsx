import React from "react";
import StyleHomeSecondSection from "./style.ts";
import { MdSupportAgent } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbSettingsPlus } from "react-icons/tb";

const HomeSecondSection = () => {
  return (
    <StyleHomeSecondSection>
      <div className="flexCenter section">
        <div className="flexColStart section-container">
          <h1 className="title">Sobre</h1>
          <span className="paragraph">
            Descubra um mundo sem imprevistos climáticos! Com o <b>uClimate</b>,
            você recebe <b>previsões</b> do tempo confiáveis,{" "}
            <b>atualizações</b> em tempo real e <b>alertas</b> diretos no seu
            celular.
          </span>
          <div className="flexCenter content">
            <div className="flexColCenter item-box">
              <div className="flexCenter item-box-logo">
                <MdSupportAgent />
              </div>
              <h1 className="item-box-title">Suporte</h1>
              <p className="item-box-description">
                Oferecemos suporte 24h por dia com chat nativo para
                solução de dúvidas e problemas instantâneamente.
              </p>
            </div>

            <div className="flexColCenter item-box">
              <div className="flexCenter item-box-logo">
                <MdOutlineDashboardCustomize />
              </div>
              <h1 className="item-box-title">Personalização</h1>
              <p className="item-box-description">
                O <b>uClimate</b> oferece fácil personalização de layouts,
                alertas e dashboards para desktop e mobile.
              </p>
            </div>

            <div className="flexColCenter item-box">
              <div className="flexCenter item-box-logo">
                <TbSettingsPlus />
              </div>
              <h1 className="item-box-title">Intregação</h1>
              <p className="item-box-description">
                O aplicativo é integrado com os demais <b>produtos da empresa</b>,
                como o Easy Coin e DPF, ampliando sua aplicabilidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyleHomeSecondSection>
  );
};

export default HomeSecondSection;
