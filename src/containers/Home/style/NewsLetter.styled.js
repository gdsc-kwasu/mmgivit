import styled from "styled-components";

export const NewsLetterContainer = styled.section`
  border: 1px solid #dfdfd7;
  padding: 3rem 0;
  background: #f6fff0;

  .subscribe {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 90%;
    margin: auto;
  }

  .header-text-wrapper {
    // font-size: 1.125rem;
    color: #121212;
    text-align: center;
  }
  span {
    display: block;
  }

  .subscribe-form {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    text-align: center;
    justify-content: space-between;
    align-items: center;
  }

  .subscribe-input-email {
    border: 1px solid #c1c1ba;
    margin: 3rem 0;
    // width: 100%;
    outline: none;
    flex: 1;
    padding: 1rem;
  }

  .subscribe-btn-submit {
    color: #fafafa;
    background: #121212;
    border: none;
    padding: 1rem 2rem;
    text-transform: uppercase;
    width: 50%;
    margin: 0 auto;
  }
`;
