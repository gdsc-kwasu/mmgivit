import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Article } from "./style/Work.styled";
import { ARTICLES_ITEMS } from "@/utils/constants";
import { Fade } from "react-awesome-reveal";

const Work = () => {
  return (
    <div>
      <Fade cascade direction="up" triggerOnce>
        <h2 className="heading">Our Activities</h2>
        <p className="description-para"></p>
      </Fade>
      <Article>
        <Fade direction="up" cascade triggerOnce>
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
        </Fade>
      </Article>
    </div>
  );
};

export default Work;
