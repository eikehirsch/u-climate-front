import styled from "styled-components";

const StyleHomeFifthSection = styled.div`
  color: #023e8a;
  width: 100%;
  margin-bottom: 6rem;

  .title {
    margin: 0 auto 2rem auto;
  }

  .description {
    width: 70%;
    text-align: center;
    font-size: 1.3rem;
    margin: 0 auto 2rem auto;
  }

  .form {
    width: 40%;
  }

  .input-container {
    width: 100%;
    gap: 2rem;
    flex-wrap: nowrap;
  }

  .input {
    border: none;
    outline: none;
    border-bottom: 1px solid #0096c7;
    padding: 0.4rem 0;
    color: #0096c7;
    background-color: #fff;
    width: 100%;
    text-align: center;
  }

  .input::placeholder {
    color: #0096c7;
    text-align: center;
  }

  .textarea {
    width: 100%;
    height: 5.313rem;
    border-radius: 10px;
    color: #0096c7;
    outline: none;
    padding: 0.6rem 1rem;
    resize: none;
    border-color: #0096c7;
    margin: 0 !important;
  }

  .textarea::placeholder {
    color: #0096c7;
  }

  .button {
    background-color: #caf0f8;
    color: #0096c7;
    padding: 1rem;
    width: 100%;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: 300ms;
    font-size: 1rem;
  }

  .button:hover {
    background-color: #0096c7;
    color: #fff;
    padding: 1rem;
    width: 100%;
    border-radius: 8px;
    border: none;
  }

  .contact-box {
    gap: 2rem;
  }

  .address {
    justify-content: flex-start;
    width: 30%;
    background: #caf0f8;
    padding: 2rem;
    border-radius: 10px;
    gap: 1rem;
  }

  .address-title {
    font-size: 1.3rem;
  }

  .adress-container {
    gap: 1rem;
  }

  .adress-subcontainer {
    width: 100%;
  }

  .adress-subcontainer-title {
    font-weight: bold;
  }

  .adress-subcontainer-description {
    font-size: 0.8rem;
  }

  @media (max-width: 1020px) and (min-width: 460px) {
    .contact-box {
      flex-direction: column;
    }

    .description {
      width: 80%;
      margin: 0 auto;
      font-size: 1.1rem;
    }

    .form {
      width: 85%;
    }

    .address {
      gap: 0.5rem;
      width: 85%;
      padding: 1rem 2rem;
    }

    .adress-container {
      gap: 0.4rem;
    }
  }

  @media (max-width: 460px) {
    .description {
      font-size: 1rem;
      width: 80%;
    }

    .contact-box {
      flex-direction: column;
    }

    .form {
      width: 80%;
    }

    .address {
      width: 80%;
    }
  }
`;

export default StyleHomeFifthSection;
