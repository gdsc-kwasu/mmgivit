import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Article } from "./style/work.styled";

const ARTICLES = [
  {
    image: "/images/article1.png",
    title: "Primary Education for Less Privilege",
    label: "Education",
    link: "See More",
    linkPath: "#",
  },
  {
    image: "/images/article2.png",
    title: "Proving Cloth and Food to the Less Privilege",
    label: "Health",
    link: "See More",
    linkPath: "#",
  },
  {
    image: "/images/article3.png",
    title: "Creating Strong Community",
    label: "Community",
    link: "See More",
    linkPath: "#",
  },
];

const Work = () => {
  return (
    <div>
      <h2 className="heading">Our Work</h2>
      <p className="description-para">
        lorem ipsum minim mollit non deserunt ullamco est sit aliqua dolor do
        amet
      </p>
      <Article>
        {ARTICLES.map((article, index) => (
          <div key={index} className="article-card">
            <Image
              src={article.image}
              alt="image here"
              width={100}
              height={100}
            />
            <div className="article-content">
              <span className="label">{article.label}</span>
              <h3 className="title">{article.title}</h3>
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
