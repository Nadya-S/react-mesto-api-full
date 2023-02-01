import React, { useState, useEffect } from 'react';
import PopupWithForm from "./PopupWithForm";
import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

const EditProfilePopup = ({isOpen, onClose, onUpdateUser}) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const onUserNameChange = (e) => {
    setName(e.target.value);
  }

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  }
  
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
      });
  };

  return (
    <PopupWithForm
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
          name="edit-profile"
          title="Редактировать профиль"
          buttonText=""
          children={
            <>
              <label className="popup__field">
                <input
                  id="name-input"
                  type="text"
                  className="popup__input"
                  minLength="2"
                  maxLength="40"
                  required
                  placeholder="Имя"
                  name="name"
                  onChange={onUserNameChange}
                  value={name || ''}
                />
                <span className="name-input-error popup__input-error"></span>
              </label>
              <label className="popup__field">
                <input
                  id="about-input"
                  type="text"
                  className="popup__input"
                  minLength="2"
                  maxLength="200"
                  required
                  placeholder="О себе"
                  name="description"
                  onChange={onDescriptionChange}
                  value={description || ''}
                />
                <span className="about-input-error popup__input-error"></span>
              </label>
            </>
          }
        />
  )
};

export default EditProfilePopup;