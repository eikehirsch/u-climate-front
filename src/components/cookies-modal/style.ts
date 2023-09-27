import styled from "styled-components";

const StyledCookiesModal = styled.div`
  .cookies-modal-wrapper {
    background: #005f73;
    border-radius: 20px;
    justify-content: center;
    padding: 2rem;
    color: white;
    width: 90%;
    flex-wrap: nowrap;
    gap: 4rem;
    position: absolute;
    top: 32%;
    left: 5%;
    text-align: center;
  }

  .cookies-modal-container-title {
    width: 100%;
  }

  .cookies-modal-container {
    gap: 1.4rem;
    width: 80%;
    text-align: center;
  }

  .cookies-modal-container-paragraph {
    font-size: 1.2rem;
    line-height: 21px;
    width: 100%;
  }

  .cookies-modal-buttons-container {
    gap: 1.6rem;
    width: 100%;
  }

  .cookies-modal-accept-button {
    padding: 1rem 2rem;
    font-weight: 600;
    font-size: 1.2rem;
    border-radius: 10px;
    border: none;
    color: #1d3557;
    background-color: #fff;
  }

  .cookies-modal-accept-button:hover {
    color: #219ebc;
    cursor: pointer;
  }

  @media (max-width: 1020px) and (min-width: 460px) {
    .cookies-modal-wrapper {
      padding: 1rem;
    }

    .cookies-modal-container {
      width: 100%;
    }

    .cookies-modal-container-paragraph {
      font-size: 1rem;
    }

    .cookies-modal-accept-button {
      padding: 0.4rem 0.8rem;
    }
  }
`;

export default StyledCookiesModal;
