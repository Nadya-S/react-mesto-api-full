import React from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

const Card = ({ card, onCardClick, onCardLike, onCardDelete }) => {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `button ${
    isOwn ? "place__delete-button" : ""
  }`;

  const isLiked = card.likes.some((user) => user._id === currentUser._id);
  const cardLikeButtonClassName = `button ${
    isLiked ? "place__like-button_active" : "place__like-button"
  }`;

  const handleClick = () => {
    onCardClick(card);
  };

  const handleLikeClick = () => {
    onCardLike(card);
  };

  const handleDeleteClick = () => {
    onCardDelete(card);
  };

  return (
    <li className="place">
      <img
        src={card.link}
        alt={card.name}
        className="place__image"
        onClick={handleClick}
      />
      <button
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
      ></button>
      <div className="place__description">
        <h2 className="place__name">{card.name}</h2>
        <div>
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <div className="place__like-counter">{card.likes.length}</div>
        </div>
      </div>
    </li>
  );
};

export default Card;
