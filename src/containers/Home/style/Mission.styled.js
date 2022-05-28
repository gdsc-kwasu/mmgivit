import styled from "styled-components";

export const MissionContainer = styled.div`
  text-align: center;
  padding: 50px 0;

  @media (min-width: 700px) {
    text-align: left;
  }
`;

export const MissionContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;

  @media only screen and (min-width: 0px) and (max-width: 320px) {
    div {
      width: 100%;
    }
  }

  @media only screen and (min-width: 321px) and (max-width: 380px) {
    div {
      width: 100%;
    }
  }

  @media only screen and (min-width: 381px) and (max-width: 576px) {
    div {
      width: 100%;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    div {
      width: 100%;
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
  width: 330px !important;
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
    cursor: pointer;

    span {
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 320px) {
    width: 300px !important;
    margin-left: -6px;
  }

  @media only screen and (min-width: 321px) and (max-width: 380px) {
    width: 100%;
  }

  @media only screen and (min-width: 381px) and (max-width: 576px) {
    width: 100% !important;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 100% !important;
  }
`;
