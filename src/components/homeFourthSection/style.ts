import styled from "styled-components";

const StyleHomeFourthSection = styled.div`
  color: #023e8a;
  width: 100%;
  margin-bottom: 6rem;

  .title {
    margin-bottom: 2rem;
  }

  .description {
    width: 70%;
    text-align: center;
    font-size: 1.3rem;
    color: #0096c7;
  }

  .section-container {
    width: 100%;
    background-color: #8ecae6;
    margin-top: 2rem;
    padding: 4rem 0;
  }

  .swiper {
    overflow: hidden;
    width: 100%;
  }

  .swiper-card {
    background-color: #fff;
    padding: 2rem;
    width: 70%;
    margin: 0 auto;
    border-radius: 8px;
    gap: 2rem;
  }

  .swiper-card-image {
    width: 20%;
    border-radius: 50%;
  }

  .swiper-buttons {
    gap: 70rem;
    position: absolute;
    top: 7rem;
    right: 2.5rem;
    z-index: 10;
  }

  .swiper-buttons > button {
    background-color: #fff;
    border: none;
    border-radius: 5px;
    color: #023e8a;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 0.2rem 0.8rem;
    opacity: 50%;
    transition: all 100ms ease-in;
  }

  .swiper-buttons > button:hover {
    font-weight: bold;
    opacity: 100%;
    scale: 1.1;
  }

  .swiper-card-occupation {
    color: #0096c7;
  }

  .swiper-card-description {
    margin-top: 2rem;
    font-style: italic;
  }

  @media (max-width: 1020px) and (min-width: 460px) {
    .swiper-card-name {
      font-size: 1.6rem;
    }

    .swiper-card {
      width: 90%;
      gap: .5rem;
      flex-direction: column;
      text-align: center;
      padding: 1rem 1.4rem;
    }

    .swiper-buttons {
      display: none;
    }
  }

  @media (max-width: 460px) {
    .description {
      font-size: 1rem;
      width: 80%;
    }

    .swiper-card {
      flex-direction: column;
      text-align: center;
      padding: 1rem 1.4rem;
    }

    .swiper-card-image {
      width: 50%;
    }

    .swiper-card-name {
      font-size: 1.6rem;
    }

    .swiper-card-description {
      font-size: 0.9rem;
    }

    .swiper-buttons {
      display: none;
    }
  }
`;

export default StyleHomeFourthSection;
