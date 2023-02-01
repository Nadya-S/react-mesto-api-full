import React from "react";
import success from "../images/success.svg";
import fail from "../images/fail.svg";

const InfoTooltip = ({ isOpen, onClose, successTooltip }) => {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button
          className="button popup__button-close"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="popup__tooltip-icon"
          src={successTooltip ? success : fail}
          alt={
            successTooltip ? "Успешная регистрация" : "Ошибка при регистрации"
          }
        />
        <h2 className="popup__title popup__title_tooltip">
          {successTooltip
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </h2>
      </div>
    </div>
  );
};

export default InfoTooltip;
