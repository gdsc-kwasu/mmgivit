import styled from "styled-components";

export const CampaignContainer = styled.div`
  text-align: center;
  color: #121212;
  margin: 1.875rem auto;

  .campaign-intro {
    text-align: left;

    p {
      width: 55%;
    }
  }

  .content {
    gap: 30px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;

    .content-cards {
      width: 315px;
      padding: 0px;
      margin: 20px 0px 18px 18px;

      p {
        height: 150px;
      }

      a {
        text-decoration: underline;
        font-weight: bold;
      }

      :hover {
        cursor: pointer;
      }
    }
  }

  .content .icons {
    object-fit: contain;
  }

  @media only screen and (min-width: 0px) and (max-width: 320px) {
    .campaign-intro {
      text-align: center;
      width: 100%;

      p {
        width: 100%;
      }
    }

    .content {
      flex-wrap: wrap;
      width: 100%;

      .content-cards {
        width: 100%;
        margin: 15px 0 10px 0;

        p {
          height: 100%;
        }
      }
    }
  }

  @media only screen and (min-width: 321px) and (max-width: 380px) {
    .campaign-intro {
      text-align: center;

      p {
        width: 100%;
      }
    }

    .content {
      flex-wrap: wrap;

      .content-cards {
        width: 100%;
        margin: 15px 0 10px 0;

        p {
          height: 100%;
        }
      }
    }
  }

  @media only screen and (min-width: 381px) and (max-width: 576px) {
    .campaign-intro {
      text-align: center;

      p {
        width: 100%;
      }
    }

    .content {
      flex-wrap: wrap;

      .content-cards {
        width: 100%;
        margin: 15px 0 10px 0;

        p {
          height: 100%;
        }
      }
    }
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    .campaign-intro {
      text-align: center;

      p {
        width: 100%;
      }
    }

    .content {
      flex-wrap: wrap;

      .content-cards {
        width: 320px;
        margin: 0 0 0 10px;
      }
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    .campaign-intro {
      text-align: center;

      p {
        width: 100%;
      }
    }

    .content {
      flex-wrap: wrap;

      .content-cards {
        width: 380px;
        margin: 0 0 0 5px;
      }
    }
  }
`;
