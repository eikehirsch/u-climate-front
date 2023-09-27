import styled from "styled-components";

const StyleHome = styled.div`
  position: relative;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(147, 211, 231, 1) 78%
  );
  font-family: "Playfair Display", serif;
  padding-top: 2rem;
  height: 100vh;

  .home-wrapper {
    overflow: hidden;
  }

  .cookie-icon {
    position: absolute;
    top: 15%;
    left: 115px;
    font-size: 2.5rem;
    color: #0096c7;
    padding: 0.4rem 1rem;
    cursor: pointer;
  }

  @media (max-width: 1200px) and (min-width: 360px) {
    .cookie-icon {
      position: absolute;
      top: 15%;
      left: 0px;
      font-size: 2.5rem;
      color: #0096c7;
      padding: 0.4rem 1rem;
      cursor: pointer;
    }
  }

  @media (max-width: 1020px) and (min-width: 460px) {
    .home-wrapper {
      justify-content: flex-start;
    }
  }

  @media (max-width: 460px) {
    .home-wrapper {
      row-gap: 0rem;
    }
  }
`;

export default StyleHome;
