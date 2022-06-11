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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              laudantium deleniti numquam optio cupiditate, fuga tenetur
              reprehenderit accusamus consectetur eum assumenda eveniet nisi
              modi ipsam minima dolorem distinctio, ratione iste.
            </p>
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
