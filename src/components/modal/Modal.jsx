import { useState } from "react";

import "./style.scss";

const Modal = ({ project, modalVisibility, onClose }) => {
  if (!modalVisibility) {
    return null;
  }

  // Utilize as informações do projeto para exibição no modal
  const { title, desc, image, link } = project;

  return (
    <div
      style={{ display: modalVisibility ? "flex" : "none" }}
      className="modal"
      onClick={onClose}
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
            <span>{desc}</span>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>fechar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
