import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: url("/images/header-bg.png") center/cover no-repeat;
  height: 550px;
  color: #f6fff0;
  animation: fade-img-one 20s ease infinite 5s;

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    height: 100vh;
  }

  @media (min-width: 765px) {
    background: linear-gradient(
        0deg,
        rgba(18, 18, 18, 0.6),
        rgba(18, 18, 18, 0.6)
      ),
      url("/images/header-bg.png") center/cover no-repeat;
    height: 703px;
    max-height: 705px;
  }
`;

export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px 8px;
  border-bottom: 1px solid rgba(250, 250, 250, 0.6);

  .logo-container {
    display: flex;
    align-items: center;
  }

  .btn {
    border: none;
    color: #f6fff0;
    cursor: pointer;
  }

  .btn-menu {
    font-size: 1.5rem;
    background: none;
    width: 24px;
  }

  .btn-search {
    display: none;
  }

  ul {
    display: none;
  }

  @media (min-width: 600px) {
    ul {
      display: flex;
      justify-content: space-evenly;
      margin-left: 3rem;
      color: #f6fff0;

      li {
        list-style: none;
        margin-right: 1rem;
        cursor: pointer;
      }
    }

    .btn-menu {
      display: none;
    }

    .btn-search {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #f16e22e5;
      padding: 14px;
      width: 47px;
      height: 47px;
      font-size: 2.5rem;
    }
  }

  @media (min-width: 765px) {
    width: 92%;
    margin: 0 auto;
    padding: 30px 0 12px;

    li {
      margin-right: 2rem !important;
    }
  }

  @media (min-width: 1024px) {
    li {
      margin-right: 2.5rem !important;
    }
  }
`;

export const IntroContent = styled.div`
  width: 90%;
  height: calc(100% - 74px);
  padding: 200px 0;
  margin: auto;

  div {
    max-width: 650px;
    margin: auto 0;
  }

  h1 {
    font-size: 2.895rem;
  }

  p {
    width: 65%;
    padding: 12px 0;
  }

  a {
    padding-top: 6px;
    cursor: pointer;
  }

  strong {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #f16e22e5;
    padding: 10px 12px;
    margin-right: 10px;
    width: 28px;
    height: 28px;
  }

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    margin: 0;
    width: 100%;
    text-align: center;
    padding: 120px 0;

    h1,
    p {
      width: 100%;
      padding: 13px 2px;
    }

    h1 {
      font-size: 2.1rem;
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    margin: 0;
    padding: 0 185px;
    width: 100%;

    h1,
    p {
      width: 100%;
      padding: 13px 2px;
    }

    h1 {
      font-size: 60px;
    }

    p {
      font-size: 22px;
    }

    a {
      font-size: 20px;
    }
  }
`;
