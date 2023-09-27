import styled from "styled-components";

const StyledSecondaryNavBar = styled.div`
  .nav-container {
    justify-content: flex-start;
    gap: 31.5rem;
    width: 100%;
  }

  .nav {
    padding: 1rem 0;
  }

  .nav-list {
    gap: 2rem;
  }

  .nav-item {
    list-style: none;
    box-shadow: inset 0 0 0 0 #0096c7;
    color: #023e8a;
    margin: 0 -0.25rem;
    padding: 0.25rem 0.5rem;
    transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    cursor: pointer;
    border-radius: 2px;
    font-size: 1.6rem;
  }

  .active {
    list-style: none;
    box-shadow: inset 0 0 0 0 #0096c7;
    color: #023e8a;
    margin: 0 -0.25rem;
    padding: 0.25rem 0.5rem;
    transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    cursor: pointer;
    border-radius: 2px;
    font-size: 1.6rem;
    text-decoration: underline;
  }

  .nav-item:hover {
    box-shadow: inset 180px 0 0 0 #0096c7;
    color: #fff;
  }

  .menu-icon {
    display: none;
  }

  @media (max-width: 900px) {
    .nav-list {
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

export default StyledSecondaryNavBar;
