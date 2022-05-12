import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Article } from "./style/Work.styled";
import { ARTICLES_ITEMS } from "@/utils/constants";

const Work = () => {
  return (
    <div>
      <h2 className="heading">Our Work</h2>
      <p className="description-para">
        lorem ipsum minim mollit non deserunt ullamco est sit aliqua dolor do
        amet
      </p>
      <Article>
        {ARTICLES_ITEMS.map((article, index) => (
          <div key={index} className="article-card">
            <div className="image-wrapper">
              <Image
                src={article.image}
                alt="image here"
                width={331}
                height={191}
              />
            </div>
            <div className="article-content">
              <span className="article-label">{article.label}</span>
              <h3 className="article-title">{article.title}</h3>
              <Link href={article.linkPath} passHref>
                <a>{article.link}</a>
              </Link>
            </div>
          </div>
        ))}
      </Article>
    </div>
  );
};

export default Work;
