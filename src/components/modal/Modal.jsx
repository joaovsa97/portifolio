import { useState } from "react";

import "./style.scss";

const Modal = ({ project, modalVisibility, onClose }) => {
  if (!modalVisibility) {
    return null;
  }

  const { title, desc, image, link } = project;

  return (
    <div
      style={{ display: modalVisibility ? "flex" : "none" }}
      className="modal"
    >
      <div className="container">
        <div className="modal-header">
          <span>{title}</span>
        </div>
        <div className="modal-body">
          <div className="image">
            <a href={link} target="_blank">
              <img src={image} alt={title} id="image" />
            </a>
            <label htmlFor="image">
              Clique na imagem para acessar a plaforma
            </label>
          </div>
          <div className="desc">
            {desc}
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Fechar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
