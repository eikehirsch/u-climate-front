import styled from "styled-components";

const StyleHomeSecondSection = styled.div`
  .section {
    margin: 6rem 0;
    text-align: center;
    color: #023e8a;
  }

  .title {
    width: 100%;
    font-size: 2.5rem;
  }

  .paragraph {
    border: 1px solid #0096c7;
    border-radius: 24px;
    padding: 1.8rem 1.4rem;
    gap: 2rem;
    color: #0096c7;
    z-index: 10;
    margin: 2rem 12rem;
    font-size: 1.3rem;
  }

  .content {
    width: 100%;
    align-items: flex-start;
    margin-top: 1rem;
  }

  .item-box {
    width: 30%;
  }

  .item-box-logo {
    align-items: center;
    padding: 3rem 3rem;
    border-radius: 50%;
    font-size: 3rem;
    background: linear-gradient(to left, #0096c7, #023e8a);
    color: white;
    margin-bottom: 1rem;
  }

  .item-box-title {
    font-size: 1.6rem;
  }

  .item-box-description {
    width: 80%;
  }

  @media (max-width: 1020px) and (min-width: 460px) {
    .title {
      font-size: 2.4rem;
    }

    .paragraph {
      margin: 2rem 3rem;
      font-size: 120%;
    }

    .section-container {
      margin-top: 6rem;
    }

    .content {
      justify-content: space-between;
    }

    .item-box-logo {
      padding: 1rem;
    }

    .item-box-title {
      font-size: 1.2rem;
    }

    .item-box-description {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 460px) {
    .section {
      width: 100%;
      padding: 0 1rem;
    }

    .paragraph {
      margin: 2rem 0rem;
      font-size: 1rem;
      padding: 1.2rem 0.8rem;
      border-radius: 14px;
    }

    .content {
      flex-direction: column;
    }

    .title {
      font-size: 2.2rem;
    }

    .item-box {
      width: 100%;
    }

    .item-box-logo {
      padding: 0.6rem;
    }

    .item-box-title {
      font-size: 1.4rem;
    }

    .item-box-description {
      font-size: 0.8rem;
    }
  }
`;

export default StyleHomeSecondSection;
