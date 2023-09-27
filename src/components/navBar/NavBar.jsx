import StyledNavBar from "./style.ts";
import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const NavBar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 1000) {
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <StyledNavBar>
      <nav id="intro-nav-container" className="flexStart intro-nav-container">
        <div id="intro-nav" className="flexStart intro-nav-box">
          <a href="https://utech.com.br/site/" target="_blank">
            <img src="./img/utech-logo.png" alt="" />
          </a>
          {/* <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}> */}
          <div
            className="flexCenter intro-nav"
            style={getMenuStyles(menuOpened)}
          >
            <li className="intro-nav-item">Home</li>
            <li className="intro-nav-item">Sobre</li>
            <li className="intro-nav-item">Funcionalidades</li>
            <li className="intro-nav-item">Feedback</li>
            <li className="intro-nav-item">Contato</li>
          </div>
          <div
            className="menu-icon"
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={50} />
          </div>
          {/* </OutsideClickHandler> */}
        </div>
      </nav>
    </StyledNavBar>
  );
};

export default NavBar;
