import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .article-card {
    background: #f7f7f7;
    width: 331px !important;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  }

  .image-wrapper span {
    display: block !important;
  }

  .image-wrapper img {
    object-fit: cover;
  }

  .article-content {
    padding: 1rem 1.25rem;
  }

  .article-label {
    color: #44841a;
    background: #d3e0cb;
    padding: 10px;
    text-align: left !important;
  }

  .article-label:nth-of-type(3) {
    color: #5041d2;
    background: #d6d3f0;
  }

  .article-title {
    font-size: 1.125rem;
    width: 75%;
    margin: 1.25rem auto;
    text-align: center;
  }

  .see-more {
    color: #6d6d6d;
    text-align: right;
    display: block;
    text-decoration: underline;

    :hover {
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 320px) {
    .article-card {
      width: 300px !important;
      margin: 13px 0px 15px 0px;
      margin-left: -5px !important;
    }
  }

  @media only screen and (min-width: 321px) and (max-width: 380px) {
    .article-card {
      margin: 13px -14px 15px 0px;
    }
  }

  @media only screen and (min-width: 381px) and (max-width: 576px) {
    .article-card {
      margin: 13px 25px 15px 25px;
    }
  }

  @media only screen and (min-width: 576px) and (max-width: 992px) {
    .article-card {
      margin: 0px 0px 40px 0px;
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    .article-card {
      width: 385px !important;
      margin: 0px 13px 30px 0px;
    }
  }
`;
