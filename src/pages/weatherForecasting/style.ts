import styled from "styled-components";

const StyledWeatherForecasting = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(147, 211, 231, 1) 78%
  );
  color: #0096c7;
  height: auto;
  min-height: 100vh;
  padding-bottom: 1rem;
  position: relative;
  overflow: hidden;

  .nav-container {
    justify-content: flex-start;
    gap: 16rem;
    width: 100%;
  }

  .nav {
    padding: 1rem 0;
  }

  .nav-list {
    gap: 2rem;
  }

  .nav-item {
    list-style: none;
    box-shadow: inset 0 0 0 0 #0096c7;
    color: #023e8a;
    margin: 0 -0.25rem;
    padding: 0.25rem 0.5rem;
    transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    cursor: pointer;
    border-radius: 2px;
    font-size: 1.6rem;
  }

  .nav-item:hover {
    box-shadow: inset 180px 0 0 0 #0096c7;
    color: #fff;
  }

  .forecasting-container {
    margin-top: 2rem;
  }

  .title {
    color: #023e8a;
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }

  .input-container {
    width: 100%;
    gap: 1rem;
    align-items: flex-end;
  }

  .city-input {
    border: none;
    outline: none;
    border-bottom: 1px solid #fff;
    padding: 0.4rem 0;
    color: #fff;
    background-color: #0096c7;
    width: 20%;
    margin-top: 1rem;
    text-align: center;
  }

  .city-input::placeholder {
    color: #fff;
    text-align: center;
  }

  .button {
    background-color: #0096c7;
    color: #fff;
    width: 100px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: 300ms;
    padding: 0 1rem;
    font-size: 1rem;
    margin-top: 1rem;
    height: 40px;
  }

  .button:hover {
    background-color: #023e8a;
    color: #fff;
    width: 100px;
    border: none;
    padding: 0 1rem;
    margin-top: 1rem;
    font-size: 0.9rem;
  }

  .check-weather-button:hover {
    color: #0077b6;
  }

  .weather-container {
    margin-top: 2rem;
    width: 100%;
    gap: 1rem;
  }

  .forecasting-averageTemp {
    margin-top: 1rem;
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: #023e8a;
  }

  .forecasting-max-temp {
    color: #dc2f02;
    padding: 0.4rem;
  }

  @media (max-width: 1200px) and (min-width: 570px) {

    padding: 0 1rem;

    .title {
      width: 85%;
    }
    
    .nav-container {
      justify-content: space-between;
      gap: 0;
      padding: 0 1rem;
    }
  }

  @media (max-width: 460px) {
    min-height: 100vh;
    height: auto;
    padding: 0 1rem;
    padding-bottom: 1rem;

    .nav-container {
      justify-content: space-between;
      gap: 0;
    }

    .title {
      width: 100%;
      font-size: 1.6rem;
    }

    .forecasting-averageTemp {
      text-align: center;
      font-size: 1.2rem;
      width: 75%;
    }

    .forecasting-min-temp {
      width: 70%;
      text-align: center;
    }

    .forecasting-max-temp {
      width: 70%;
      text-align: center;
    }
  }
`;

export default StyledWeatherForecasting;
