import styled from "styled-components";

export const MissionContainer = styled.div`
  text-align: center;
`;

export const MissionContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;

  .missions {
    background-position: center;
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
`;
