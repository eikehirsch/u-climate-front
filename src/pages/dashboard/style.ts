import styled from "styled-components";

const StyledDashboard = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(147, 211, 231, 1) 78%
  );
  color: #0096c7;
  height: auto;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  .nav-container {
    justify-content: flex-start;
    gap: 16rem;
    width: 100%;
  }

  .dashboard-container {
    border-radius: 4px;
    width: 99%;
    min-height: 85vh;
    gap: 1rem;
    background-color: #1d3557;
  }

  .panel-graphic-container {
    width: 100%;
    row-gap: 1rem;
  }

  .panel-graphic-first-row {
    gap: 1rem;
  }

  @media (max-width: 1200px) {
    padding: 0 1rem;

    .dashboard-container {
      flex-direction: column;
      margin: 2rem 0;
      padding: 0 1rem;
      border: none;
      width: 98%;
    }

    .nav-container {
      justify-content: space-between;
      gap: 0;
      padding: 0 1rem;
    }

    .panel-graphic-container {
      margin-bottom: 1rem;
      gap: 0.5rem;
    }
  }

  @media (max-width: 569px) {
    .dashboard-container {
      flex-direction: column;
    }
  }
`;

export default StyledDashboard;
