import styled from "styled-components";

export const NewsLetterContainer = styled.section`
  border: 1px solid #dfdfd7;
  padding: 3rem 0;
  background: #f6fff0;
  margin: 2.5rem 0;

  .subscribe {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: auto;
  }

  .header-text-wrapper {
    color: #121212;
    text-align: center;
    width: 100%;
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

  @media (min-width: 500px) {
    .subscribe-form {
      margin-top: 1.5rem;
    }

    .subscribe-input-email {
      width: 60%;
      margin: 0 1rem;
    }

    .subscribe-btn-submit {
      width: 40%;
      max-width: 200px;
    }
  }

  @media (min-width: 1024px) {
    .header-text-wrapper {
      text-align: left;
      width: 40%;
      // max-width: 282px;
    }

    .subscribe-form {
      margin: 0;
      width: 60%;
    }
  }
`;
