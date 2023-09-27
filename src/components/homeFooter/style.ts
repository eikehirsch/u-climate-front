import styled from "styled-components";

const StyleHomeFooter = styled.div`
  background: rgba(147, 211, 231, 1);
  width: 100%;
  padding: 4rem 0;
  margin-top: 2rem;

  .title {
    margin-bottom: 1rem;
  }

  .images-container {
     gap: 2rem;
  }

  .image {
     width: 30%;
     border-radius: 4px;
     cursor: pointer;
  }

  .footer-info-container {
     margin-top: 4rem;
     width: 100%;
  }

  .footer-container-subtitle {
     width: 75%;
     text-align: center;
  }

  .image-partners {
     width: 85%;
  }

  .image-utech {
     width: 20%;
  }

  .social-media-subcontainer {
     font-size: 2rem;
     gap: 1rem;
  }
`;

export default StyleHomeFooter;
