import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
  const [cardName, setCardName] = useState('');
  const [cardLink, setCardLink] = useState('');

  const onCardNameAdd = (e) => {
    setCardName(e.target.value);
  };

  const onCardLinkAdd = (e) => {
    setCardLink(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace({
      name: cardName,
      link: cardLink,
    });
  };

  useEffect(() => {
    setCardName('');
    setCardLink('');
  }, [isOpen])

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="add-place"
      title="Новое место"
      buttonText=""
      children={
        <>
          <label className="popup__field">
            <input
              id="card-name-input"
              name="cardName"
              value={cardName}
              onChange={onCardNameAdd}
              className="popup__input"
              type="text"
              minLength="2"
              maxLength="30"
              required
              placeholder="Название"
            />
            <span className="card-name-input-error popup__input-error"></span>
          </label>
          <label className="popup__field">
            <input
              id="url-input"
              name="cardLink"
              value={cardLink}
              onChange={onCardLinkAdd}
              type="url"
              className="popup__input"
              required
              placeholder="Ссылка на картинку"
            />
            <span className="url-input-error popup__input-error"></span>
          </label>
        </>
      }
    />
  );
};

export default AddPlacePopup;
