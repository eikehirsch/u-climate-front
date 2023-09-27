import styled from "styled-components";

const StyledDashboardLeftColumn = styled.div`

  width: 18%;

  .left-column {
    min-height: 85vh;
    width: 100%;
    background-color: #1d3557;
    padding: 1rem;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .left-column-image {
    background-color: #fff;
    padding: 0.4rem 1rem;
    border-radius: 4px;
  }

  .dashboard-title {
    text-align: center;
    font-size: 1.6rem;
    color: rgba(147, 211, 231, 1);
  }

  .dashboard-description {
    text-align: center;
    color: #fff;
  }

  .dashboard-form-container {
    width: 100%;
    gap: 1rem;
  }

  .dashboard-form-input {
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
    margin-top: 2rem;
    font-size: 1.05rem;
    min-height: 40px;
  }

  .button:hover {
    background-color: #023e8a;
    color: #fff;
    padding: 0.4rem 1rem;
    border-radius: 8px;
    border: none;
    margin-top: 2rem;
    font-size: 0.95rem;
    min-height: 40px;
  }

  .error {
    font-size: .8rem;
    color: #e63946;
    padding: .1rem .4rem;
    border-radius: 4px;
    margin-top: .4rem;
    background-color: #fff;
  }

  @media (max-width: 1200px) and (min-width: 570px) {

    width: 100%;

    .left-column {
      flex-direction: column;
      min-height: auto;
      height: auto;
      gap: .5rem;
      border-radius: 4px;
    }

    .left-column-image {
      margin-bottom: 1rem;
    }

    .button{
      margin-top: 1rem;
    }

    .button:hover {
      margin-top: 1rem;
    }
  }
`;

export default StyledDashboardLeftColumn;
