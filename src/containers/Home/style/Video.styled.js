import styled from "styled-components";

export const VidContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;
  text-align: center;
  margin: 1.5rem auto;

  .video-container {
    width: 500px;
    color: #fff;
    font-size: 1.5rem;

    .video {
      width: 100%;
      height: 295px;
      color: #fff;
      background: #f16e22e5;
      font-size: 1.5rem;
    }
  }

  .texts {
    width: 50%;
    text-align: left;

    h2 {
      color: #121212;
      font-size: 1.25rem;
    }

    span {
      color: #f16e22e5;
    }

    p {
      color: #6d6d6d;
      margin-top: 1.25rem;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 320px) {
    width: 100%;
    margin-left: -6px;

    .texts {
      width: 100%;
    }

    .video-container {
      .video {
        height: 200px;
        width: 300px;
      }
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 576px) {
    width: 100%;

    .texts {
      width: 100%;
    }

    .video-container {
      .video {
        height: 200px;
        width: 100%;
      }
    }
  }

  @media only screen and (min-width: 576px) and (max-width: 992px) {
    display: flex;
    flex-direction: row-reverse;

    .texts {
      width: 49%;
    }

    .video-container {
      width: 48%;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    display: flex;

    .texts {
      width: 49%;
    }

    .video-container {
      width: 48%;
    }
  }
`;
