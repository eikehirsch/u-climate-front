import styled from "styled-components";

const StyledCityAnalytics = styled.div`
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
    justify-content: center;
    gap: 16rem;
    width: 100%;
  }

  .cityAnalytics-container {
    border-radius: 4px;
    width: 99%;
    min-height: 85vh;
    gap: 1rem;
    background-color: #1d3557;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 2rem 0;
  }

  .title {
    font-size: 1.6rem;
    color: #a8dadc;
    text-align: center;
    margin: 0 auto;
    width: 75%;
  }

  .form {
    width: 100%;
  }

  .form-title {
    color: #fff;
    margin-bottom: 1rem;
    text-align: center;
  }

  .form-container {
    gap: 2rem;
  }

  .form-subcontainer {
    gap: 0.4rem;
  }

  .form-input {
    border: none;
    outline: none;
    border-bottom: 1px solid #0096c7;
    padding: 0.4rem 0;
    color: #0096c7;
    width: 190px;
    cursor: pointer;
    border-radius: 4px;
  }

  .button {
    background-color: #0096c7;
    color: #fff;
    padding: 0.4rem 1rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: 300ms;
    min-width: 120px;
    font-size: 1.05rem;
    min-height: 40px;
    align-items: center;
  }

  .button:hover {
    background-color: #023e8a;
    color: #fff;
    padding: 0.4rem 1rem;
    border-radius: 8px;
    border: none;
    min-width: 120px;
    font-size: 0.95rem;
    min-height: 40px;
  }

  .cityAnalyticsGraphic-container {
    width: 100%;
  }

  .amplitude-container {
    width: 100%;
    gap: 1rem;
  }

  .amplitude-subcontainer {
    background-color: #fff;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    width: 28%;
    text-align: center;
    gap: 0rem;
  }

  .amplitude-subcontainer > span {
    font-size: 0.9rem;
  }

  .amplitude-subcontainer > :last-child {
    color: #1d3557;
  }

  @media (max-width: 1200px) {
    padding: 0 1rem;

    .nav-container {
      justify-content: flex-end;
      gap: 0;
      padding: 0 1rem;
    }

  }

  @media (max-width: 900px) {
    .amplitude-subcontainer {
    background-color: #fff;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    width: 50%;
    text-align: center;
    gap: 0rem;
  }
  }
`;

export default StyledCityAnalytics;
