import React, { useState } from "react";
import StyledSecondaryNavBar from "./style.ts";
import { useNavigate } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";

const SecundaryNavBar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 1000) {
      return { right: !menuOpened && "-100%" };
    }
  };

  const navigate = useNavigate();

  return (
    <StyledSecondaryNavBar>
      <nav className="flexCenter nav">
        <ul style={getMenuStyles(menuOpened)} className="flexCenter nav-list">
          <li onClick={() => navigate("/")} className="nav-item">
            Home
          </li>
          <li onClick={() => navigate("/previsao-florianopolis")} className="nav-item">
            Florianópolis
          </li>
          <li onClick={() => navigate("/dashboard")} className="nav-item">
            Dashboard
          </li>
          <li onClick={() => navigate("/city-analytics")} className="nav-item">
            CityAnalytics
          </li>
        </ul>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={50} />
        </div>
      </nav>
    </StyledSecondaryNavBar>
  );
};

export default SecundaryNavBar;
