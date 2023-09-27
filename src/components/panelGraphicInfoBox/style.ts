import styled from "styled-components";

const StyledPanelGraphicInfoBox = styled.div`
  .subcontainer {
    text-align: center;
    position: relative;
    background-color: white;
    border-radius: 10px;
    padding: 1rem;
    width: 100%;
  }

  @media (max-width: 1200px) and (min-width: 570px) {
  .subcontainer {
    padding: 0.4rem .8rem;
  }
  }
`;

export default StyledPanelGraphicInfoBox;
