import styled from "styled-components";

const StyleHomeThirdSection = styled.div`
  .section {
    text-align: center;
    color: #023e8a;
    margin-bottom: 6rem;
  }

  .section-container {
    gap: 2rem;
  }

  .item-box {
    flex-wrap: nowrap;
    gap: 1rem;
  }

  .left-box {
    width: 30%;
    gap: 4rem;
    text-align: end;
  }

  .item-title {
    font-size: 1.2rem;
  }

  .right-box {
    width: 30%;
    gap: 4rem;
    text-align: start;
  }

  .item-box-logo {
    align-items: center;
    padding: 1rem 1rem;
    width: 100px;
    border-radius: 50%;
    font-size: 1.8rem;
    background: #fff;
    color: #0096c7;
    border: 1px solid #0096c7;
  }

  @media (max-width: 1020px) and (min-width: 460px) {
    .section {
      width: 100%;
      padding: 0 1rem;
    }

    .section-container {
      gap: 1rem;
    }

    .title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .item-title {
      font-size: 0.8rem;
    }

    .left-box > .item-box {
      flex-direction: column-reverse;
    }

    .item-box {
      flex-direction: column;
      text-align: center;
    }

    .item-box-logo {
      padding: 0.5rem;
      width: 50px;
    }

    .item-description {
      font-size: 0.9rem;
    }

    .left-box {
      gap: 2rem;
    }

    .right-box {
      gap: 2rem;
    }

    .iphone-image {
      width: 30%;
    }
  }

  @media (max-width: 600px) {
    .section-container {
      gap: 6rem;
    }
    .iphone-image {
      display: none;
    }
  }

  @media (max-width: 460px) {
    .section {
      width: 100%;
      padding: 0 1rem;
    }

    .title {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .left-box {
      width: 45%;
    }

    .right-box {
      width: 45%;
    }

    .left-box > .item-box {
      flex-direction: column-reverse;
    }

    .item-box {
      flex-direction: column;
      text-align: center;
      height: 220px;
    }

    .item-box-logo {
      width: 65px;
    }

    .item-description {
      font-size: 0.8rem;
    }
  }
`;

export default StyleHomeThirdSection;
