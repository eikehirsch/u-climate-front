import styled from "styled-components";

const StyledGraphicPanel = styled.div`
  width: 100%;

  .panel-graphic-wrapper {
    position: relative;
    background-color: white;
    border-radius: 10px;
    width: 98%;
  }

  .mixed-chart {
    text-align: center;
  }

  .graphic-description-container {
    gap: 2rem;
  }

  .graphic-description > span {
    color: #023e8a;
  }

  .floating-graphic-container {
    position: absolute;
    left: 5rem;
    top: .2rem;
    gap: 1rem;
  }

  .floating-graphic-title {
    font-size: 1.6rem;
    color: #0096c7;
    font-weight: bold;
  }

  @media (max-width: 1200px) and (min-width: 460px) {
    .panel-graphic-wrapper {
      width: 100%;
    }
  }
`;

export default StyledGraphicPanel;
