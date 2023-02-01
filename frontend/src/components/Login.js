import React, { useState, useCallback } from "react";
import AuthorizationForm from "./AuthorizationForm";

const Login = ({onLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const resetForm = useCallback(() => {
    setEmail("");
    setPassword("");
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({email, password});
    resetForm();
  };

  return (
    <div className="authorization">
      <AuthorizationForm 
        title="Вход" 
        buttonText="Войти"
        handleSubmit={handleSubmit}
        onEmailChange={onEmailChange}
        onPasswordChange={onPasswordChange}
        email={email}
        password={password}
     />
    </div>
  );
};

export default Login;
