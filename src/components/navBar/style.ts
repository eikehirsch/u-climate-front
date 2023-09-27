import styled from "styled-components";

const StyledNavBar = styled.div`
  width: 100%;

  .intro-nav-container {
    margin-bottom: 60px;
  }

  .menu-icon {
    display: none;
  }

  .intro-nav-box {
    width: 100%;
    position: relative;
  }

  .intro-nav {
    font-size: 1.2rem;
    text-decoration: none;
    list-style-type: none;
    gap: 4rem;
    color: #0096c7;
    width: 100%;
  }

  .intro-nav-item {
    box-shadow: inset 0 0 0 0 #0096c7;
    color: #023e8a;
    margin: 0 -0.25rem;
    padding: 0.25rem 0.5rem;
    transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    cursor: pointer;
    border-radius: 2px;
  }

  .intro-nav-item:hover {
    box-shadow: inset 180px 0 0 0 #0096c7;
    color: #fff;
  }

  @media (max-width: 1300px) {
    .intro-nav-box {
      justify-content: space-between;
      margin: 0 1rem;
    }
  }

  @media (max-width: 900px) {
    .intro-nav {
      align-items: flex-start;
      background-color: white;
      border-radius: 10px;
      box-shadow: 0px 4px 4px rgb(0, 0, 0, 0.05);
      flex-direction: column;
      font-weight: 500;
      gap: 1rem;
      width: auto;
      padding: 1rem;
      position: absolute;
      right: 2rem;
      top: 3rem;
      transition: all 300ms ease-in;
      z-index: 2;
    }

    .menu-icon {
      display: block;
      cursor: pointer;
    }
  }
`;

export default StyledNavBar;
