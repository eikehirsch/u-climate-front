import React from "react";
import StyledPanelGraphicInfoBox from "./style.ts";

const PanelGraphicInfoBox = ({ children, title }) => {
  return (
    <StyledPanelGraphicInfoBox>
      <div className="flexCenter container">
        <div className="flexCEnter subcontainer">
          <h4>{title}</h4>
          <span>{children}</span>
        </div>
      </div>
    </StyledPanelGraphicInfoBox>
  );
};

export default PanelGraphicInfoBox;
