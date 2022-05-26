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
    padding: 0px;

    h3,
    p {
      width: 320px;
      margin-left: -112px;
    }

    h3 {
      font-size: 1.25rem;
      margin-top: 10px;
    }

    p {
      height: 140px;
      line-height: 22px;
    }

    .action-text {
      height: 35px;
      padding: 3px;
      margin-top: -35px;
      color: #121212 !important;
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

  @media only screen and (min-width: 0px) and (max-width: 500px) {
    .content-cards {
      h3,
      p {
        margin: 0 auto;
      }

      p {
        margin-top: 10px;
        margin-bottom: 14px;
        height: 100%;
      }
    }
  }
`;
