import styled from "styled-components";

const StyleHomeFooter = styled.div`
  background: #caf0f8;
  width: 100%;
  padding: 4rem 0;
  margin-top: 2rem;
  color: #545454; 

  .title {
    margin-bottom: 1rem;
  }

  .images-container > a > img {
   width: 60%;
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
     font-size: 1rem;
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

  .social-media-subcontainer > a {
   color: #000;
   display: flex;
   align-items: flex-end;
  }

  @media (max-width: 725px) {

   padding: 2rem 0;

   .footer-container {
      flex-direction: column;
      gap: 2rem;
   }

   .footer-container-subtitle {
      width: 100%;
   }
  }
`;

export default StyleHomeFooter;
