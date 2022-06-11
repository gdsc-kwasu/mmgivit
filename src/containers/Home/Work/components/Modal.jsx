import React from "react";
import propTypes from "prop-types";
import modalStyle from "../style/modal.module.scss";

const Modal = ({ articles, openModal }) => {
  return (
    <React.Fragment>
      {articles.map((modal, index) => {
        return (
          <div
            className={`${
              !modal.open ? `${modalStyle.activeModal}` : `${modalStyle.root}`
            }`}
            onClick={() => openModal(index)}
          >
            <div onClick={() => openModal(!index)}>X</div>
            <h1>{modal.title}</h1>
            <p>{modal.more && modal.more.paragOne}</p>
            <p>{modal.more && modal.more.paragTwo}</p>
            <p>{modal.more && modal.more.paragThree}</p>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Modal;

Modal.propTypes = {
  modals: propTypes.array.isRequired,
  openModal: propTypes.func.isRequired,
};
