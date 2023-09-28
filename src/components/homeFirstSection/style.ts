import styled from "styled-components";

const StyleHomeFirstSection = styled.div`
  .section {
    justify-content: space-between;
  }

  .section-container {
    line-height: 4.5rem;
    width: 75%;
  }

  .title {
    font-size: 6rem;
    color: #023e8a;
  }

  .button {
    background-color: #0096c7;
    color: #fff;
    width: 40%;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: 300ms;
    margin-top: 3rem;
    height: 60px;
    font-size: 1.05rem;
  }

  .button:hover {
    background-color: #023e8a;
    color: #fff;
    padding: 1rem;
    width: 40%;
    border-radius: 8px;
    border: none;
    margin-top: 3rem;
    font-size: 0.95rem;
  }

  .subtitle {
    font-size: 58px;
    color: #0096c7;
  }

  .text {
    font-size: 26px;
    width: 52%;
    line-height: 2rem;
    margin-top: 5rem;
    color: #023e8a;
  }

  @media (max-width: 1300px) {
    .section {
      width: 100%;
      padding: 0 1rem;
    }
  }

  @media (max-width: 1020px) and (min-width: 570px) {
  
    .section {
      width: 100%;
      padding: 0 1rem;
    }

    .section-container {
      line-height: 4.5rem;
      width: 100%;
    }

    .title {
      font-size: 4.6rem;
      width: 100%;
    }

    .subtitle {
      font-size: 2.4rem;
      line-height: 2.6rem;
    }

    .button {
      width: 55%;
      margin-top: 5rem;
      padding: 0.4rem;
    }

    .button:hover {
      width: 55%;
      padding: 0;
      background-color: #023e8a;
      color: #fff;
      border-radius: 8px;
      border: none;
      margin-top: 5rem;
      font-size: 0.95rem;
    }

    .text {
      width: 85%;
      font-size: 100%;
    }

    .home-phone-image {
      display: none;
    }
  }

  @media (max-width: 569px) {

    margin-bottom: 5rem;

    .section {
      width: 100%;
      padding: 0 1rem;
    }

    .section-container {
      width: 100%;
    }

    .title {
      font-size: 3.1rem;
    }

    .subtitle {
      font-size: 2.4rem;
      line-height: 2.6rem;
    }

    .button {
      width: 75%;
      padding: 0.2rem;
    }

    .button:hover {
      width: 60%;
      padding: 0;
      background-color: #023e8a;
      color: #fff;
      border-radius: 8px;
      border: none;
      margin-top: 3rem;
      font-size: 0.95rem;
    }

    .text {
      width: 100%;
      font-size: 1.1rem;
    }

    .home-phone-image {
      display: none;
    }
  }
`;

export default StyleHomeFirstSection;
