import React from "react";
import Card from "./Card";
import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

const Main = ({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <button
          className="profile__avatar-button"
          onClick={onEditAvatar}
        ></button>
        <img
          className="profile__avatar"
          src={currentUser.avatar}
          alt="аватар"
        />

        <div className="profile__info">
          <div className="profile__edit-form">
            <h1 className="profile__name">{currentUser.name}</h1>
            <p className="profile__about">{currentUser.about}</p>
          </div>
          <button
            className="button profile__edit-button"
            onClick={onEditProfile}
          ></button>
        </div>
        <button
          className="button profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="places">
        <ul className="list places__list">
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
