import React, { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
  const userAvatarRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAvatar(userAvatarRef.current.value);
  };

  useEffect(() => {
    userAvatarRef.current.value = "";
  }, [isOpen])

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="edit-avatar"
      title="Обновить аватар"
      buttonText=""
      children={
        <label className="popup__field">
          <input
            id="url-input-avatar"
            name="url_input"
            type="url"
            ref={userAvatarRef}
            className="popup__input"
            required
            placeholder="Ссылка на картинку"
          />
          <span className="url-input-avatar-error popup__input-error"></span>
        </label>
      }
    />
  );
};

export default EditAvatarPopup;
