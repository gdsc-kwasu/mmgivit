import Image from "next/image";
import React from "react";
import { Article } from "./style/Work.styled";
import { ARTICLES_ITEMS } from "@utils/constants";
import { Fade } from "react-awesome-reveal";
import Modal from "./components/Modal";

const Work = () => {
  const [modals, setModal] = React.useState(ARTICLES_ITEMS);

  const openModal = (indexOfModals) => {
    setModal(
      modals.map((modal, index) => {
        if (index !== indexOfModals) {
          modal.open = modal.open;
        } else {
          modal.open = !modal.open;
        }
        return modal;
      })
    );
  };

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
                <p className="see-more" onClick={() => openModal(index)}>
                  {article.link}
                </p>
                <Modal modal={ARTICLES_ITEMS} openModal={openModal} />
              </div>
            </div>
          ))}
        </Fade>
      </Article>
    </div>
  );
};

export default Work;
