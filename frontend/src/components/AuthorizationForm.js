import React from "react";

const AuthorizationForm = ({
  title,
  buttonText,
  handleSubmit,
  onEmailChange,
  onPasswordChange,
  email,
  password,
}) => {
  return (
    <form className="authorization__form" onSubmit={handleSubmit}>
      <h2 className="authorization__title">{title}</h2>
      <input
        className="authorization__input"
        name="email"
        type="email"
        placeholder="Email"
        id="email-input"
        minLength="4"
        maxLength="30"
        required
        value={email || ""}
        onChange={onEmailChange}
      ></input>
      <input
        className="authorization__input"
        name="password"
        type="password"
        placeholder="Пароль"
        id="password-input"
        minLength="6"
        maxLength="20"
        required
        onChange={onPasswordChange}
        value={password || ""}
      ></input>
      <button className="button authorization__button" type="submit">
        {buttonText}
      </button>
    </form>
  );
};

export default AuthorizationForm;
