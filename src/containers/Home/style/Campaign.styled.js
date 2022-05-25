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

  .content-cards {
    width: 100%;
    border: 1px solid red;
    padding: 0px;

    h3,
    p {
      width: 100px;
      width: 210px;
      text-align: center;
      margin-left: -58px;
    }

    h3 {
      font-size: 1.25rem;
      margin-top: 10px;
    }

    a {
      text-decoration: underline;
      font-weight: 700;
    }
  }

  .content .icons {
    object-fit: contain;
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
