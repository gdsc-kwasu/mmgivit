import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  align-items: center;

  .article-card {
    background: #f7f7f7;
    width: 331px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
    margin: 0 auto;
  }

  .article-image {
    object-fit: cover;
    display: block !important;
    // width: 100%;
  }

  .article-content {
    padding: 1rem 1.25rem;
  }

  .article-label {
    color: #44841a;
    background: #d3e0cb;
    padding: 10px;
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

  a {
    color: #6d6d6d;
    text-align: right;
    display: block;
    text-decoration: underline;
  }
`;
