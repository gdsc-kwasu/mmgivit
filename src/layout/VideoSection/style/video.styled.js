import styled from "styled-components";

export const VidContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;
  text-align: center;
  margin: 1.5rem auto;

  .video {
    width: 100%;
    height: 285px;
    color: #fff;
    background: #f16e22e5;
    font-size: 1.5rem;
  }

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
`;
