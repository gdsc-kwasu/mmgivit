import styled from "styled-components";

export const CampaignContainer = styled.div`
  text-align: center;
  color: #121212;
  margin: 1.875rem auto;

  .content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    text-align: center;
  }

  .content div {
    width: 100%;
  }

  .content .icons {
    object-fit: contain;
  }

  .content h3 {
    font-size: 1.25rem;
    margin-top: 10px;
  }

  .content p {
    margin: 10px 0 20px;
  }

  .content a {
    text-decoration: underline;
    font-weight: 700;
  }

  @media (min-width: 500px) {
    .content div {
      width: 70%;
      margin: auto;
    }
  }

  @media (min-width: 650px) {
    text-align: left;
    margin: 3rem auto;

    .description-para {
      max-width: 550px;
    }

    .content div {
      width: 30%;
      max-width: 287px;
    }
  }
`;
