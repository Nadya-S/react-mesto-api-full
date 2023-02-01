import React from "react";

const ImagePopup = ({ onClose, card }) => {
  return (
    <div className={`popup popup_open-image ${card && "popup_opened"}`}>
      <figure className="popup__image-container">
        <button
          className="button popup__button-close"
          onClick={onClose}
        ></button>
        <img
          src={card?.link}
          alt={card?.name}
          className="popup__big-image"
        />
        <figcaption id="popup_img-name">{card?.name}</figcaption>
      </figure>
    </div>
  );
};

export default ImagePopup;