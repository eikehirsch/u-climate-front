import styled from "styled-components";

const StyledWeatherBox = styled.div`
  position: relative;

  .weather-box-index {
    padding: 0.4rem 0.6rem;
    background-color: #023e8a;
    color: #fff;
    font-size: 1rem;
    border-radius: 4px;
  }

  .weather-box {
    border: 1px solid black;
    color: grey;
    background-color: #fff;
    border-radius: 4px;
    padding: 1rem;
    width: 100%;
    height: 300px;
    justify-content: space-between;
    background-image: url("./img/wave.png");
    background-position: center;
  }

  .temp-min-max-subcontainer {
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .feelsLike-temp {
    margin-bottom: 1rem;
  }

  .min-temp {
    color: #023e8a;
  }

  .max-temp {
    color: #dc2f02;
  }

  .umidity {
    margin-bottom: 2.5rem;
  }

  .sky {
    color: #fff;
    margin-top: 2rem;
  }

  .sky-description {
    width: 80%;
    text-align: center;
    color: #fff;
    margin: 0 auto;
    gap: .5rem;
  }

  @media (max-width: 460px) {
    .weather-box {
      padding: 1rem;
      width: 19rem;
      height: auto;
    }
  }
`;

export default StyledWeatherBox;
