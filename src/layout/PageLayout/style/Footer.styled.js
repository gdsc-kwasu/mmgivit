import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 100%;
  width: 80%;
  margin: 2.5rem auto;

  p {
    text-align: center;
  }
`;

export const FooterContentSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  border-bottom: 1px solid rgba(18, 18, 18, 0.22);

  .content {
    // width: 100%;
    margin-bottom: 2rem;
  }

  h3 {
    text-transform: uppercase;
    color: #121212;
    margin-bottom: 1.25rem;
    font-weight: 600;
  }

  a {
    color: #6d6d6d;
    margin-bottom: 0.75rem;
    font-size: 0.875rem;
    display: block;
  }
`;
export const FooterNavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;

  .wrapper {
    margin: 2.5rem 0;
  }

  .social-icons {
    color: #6d6d6d;
    width: 20px;
    height: 20px;
    margin-left: 1rem;
  }

  .nav-content {
    margin: 1rem 0 0.75rem;
  }

  .nav-items {
    color: #44841a;
    font-size: 0.8rem;
    margin-right: 0.2rem;
  }

  .copyright {
    color: #545454;
    font-size: 0.68rem;
  }

  .logo-wrapper {
    display: flex;
    align-items: center;
    margin: 0 auto;
  }

  .logo-title {
    line-height: 25px;
    letter-spacing: 1.5px;
  }

  .logo-title h3 {
    text-transform: uppercase;
    // margin-bottom: 0.5rem;
  }

  .logo-image-wrapper {
    margin-right: 0.5rem;
  }

  @media only screen and (min-width: 0px) and (max-width: 768px) {
    .copyright {
      .gdsc-kwasu {
        padding-top: 7px;
        text-align: left;
      }
    }

    .logo-wrapper {
      margin: 0;
    }
  }
`;
