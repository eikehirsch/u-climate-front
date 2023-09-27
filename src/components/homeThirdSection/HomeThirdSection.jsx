import React from "react";
import StyleHomeThirdSection from "./style.ts";
import { SiFastapi } from "react-icons/si";
import { CiBatteryFull } from "react-icons/ci";
import { SiGooglemaps } from "react-icons/si";
import { RxUpdate } from "react-icons/rx";
import { HiAcademicCap } from "react-icons/hi2";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const HomeThirdSection = () => {
  return (
    <StyleHomeThirdSection>
      <div className="flexCenter section">
        <h1 className="title">Funcionalidades</h1>
        <div className="flexCenter section-container">
          <div className="flexCenter left-box">
            <div className="flexCenter item-box">
              <div>
                <h1 className="item-title">Rápido processamento</h1>
                <p className="item-description">
                  Tráfego de informações otimizado de acordo com sua conexão,
                  permitindo rápidas respostas de requerimentos.
                </p>
              </div>
              <div className="flexCenter item-box-logo">
                <SiFastapi />
              </div>
            </div>
            <div className="flexCenter item-box">
              <div>
                <h1 className="item-title">Baixo consumo</h1>
                <p className="item-description">
                  Opção de economia de bateria para manter um uso prolongado da
                  aplicação.
                </p>
              </div>
              <div className="flexCenter item-box-logo">
                <CiBatteryFull />
              </div>
            </div>
            <div className="flexCenter item-box">
              <div>
                <h1 className="item-title">Compatibilidade com Maps</h1>
                <p className="item-description">
                  Fácil integração com outros aplicativos do gênero, como Google
                  Maps.
                </p>
              </div>
              <div className="flexCenter item-box-logo">
                <SiGooglemaps />
              </div>
            </div>
          </div>

          <img className="iphone-image" src="./img/iphone-screen.png" alt="" />

          <div className="flexCenter right-box">
            <div className="flexCenter item-box">
              <div className="flexCenter item-box-logo">
                <RxUpdate />
              </div>
              <div>
                <h1 className="item-title">Atualizações regulares</h1>
                <p className="item-description">
                  Patches de novas funcionalidades e correções de bugs 
                  mensalmente de acordo com o feedback dos usuários.
                </p>
              </div>
            </div>
            <div className="item-box">
              <div className="flexCenter item-box">
                <div className="flexCenter item-box-logo">
                  <MdOutlineWorkspacePremium />
                </div>
                <div>
                  <h1 className="item-title">Versão premium</h1>
                  <p className="item-description">
                    Além da versão gratuita, há a versão premium com
                    funcionalidades exclusivas.
                  </p>
                </div>
              </div>
            </div>
            <div className="item-box">
              <div className="flexCenter item-box">
                <div className="flexCenter item-box-logo">
                  <HiAcademicCap />
                </div>
                <div>
                  <h1 className="item-title">School friendly</h1>
                  <p className="item-description">
                    Recursos voltados para estudantes e professores para estudos, projetos
                    e relatórios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleHomeThirdSection>
  );
};

export default HomeThirdSection;
