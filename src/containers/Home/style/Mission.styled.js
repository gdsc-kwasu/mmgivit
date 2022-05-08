import styled from "styled-components";

export const MissionContainer = styled.div`
  text-align: center;

  @media (min-width: 700px) {
    text-align: left;
  }
`;

export const MissionContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;

  .missions {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    min-height: 257px;
    width: 228px;
    margin: auto;
    text-decoration: underline;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f6fff0;
    font-size: 1.25rem;
    font-weight: 600;
  }

  @media (min-width: 500px) {
    .missions {
      background-size: cover;
      width: 60%;
    }
  }

  @media (min-width: 700px) {
    .missions {
      width: 30%;
      max-height: 372px;
    }
  }

  @media (min-width: 1024px) {
    gap: 2.375rem;

    .missions {
      margin: 0;
    }
  }
`;
