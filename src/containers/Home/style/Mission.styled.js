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

export const MissionContentItem = styled.div`
  background: linear-gradient(
      0deg,
      rgba(18, 18, 18, 0.42),
      rgba(18, 18, 18, 0.42)
    ),
    ${(props) => `url("${props.backgroundImage}")`} center/cover no-repeat;
  min-height: 257px;
  width: 95%;
  margin: auto;
  text-decoration: underline;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f6fff0;
  font-size: 1.25rem;
  font-weight: 600;
  position: relative;
  overflow: hidden;

  & span {
    z-index: 10;
  }

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    background: linear-gradient(
      0deg,
      rgba(241, 110, 34, 0.9),
      rgba(241, 110, 34, 0.9)
    );
    transform: translate(0, 100%);
    transition: transform ease-in-out 0.15s;
  }

  &:hover:after {
    transform: translate(0, 0);
  }

  @media (min-width: 500px) {
    & {
      background-size: cover;
      width: 60%;
    }
  }

  @media (min-width: 700px) {
    & {
      width: 30%;
      max-height: 372px;
    }
  }

  @media (min-width: 1024px) {
    & {
      margin: 0;
    }
  }
`;
