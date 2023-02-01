import React from "react";
import { Link, useHistory, Switch, Route } from "react-router-dom";
import logo from "../images/logo.svg";

const Header = ({ setLoggedIn, userEmail }) => {
  const history = useHistory();

  const onSignOut = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    history.push("/sign-in");
  };

  return (
    <header className="header">
      <img className="logo header__logo" src={logo} alt="Место" />
      <Switch>
        <Route exact path="/">
          <div className="header__email">{userEmail}</div>
          <button className="button header__button" onClick={onSignOut}>
            Выйти
          </button>
        </Route>
        <Route path="/sign-in">
          <Link to="/sign-up" className="button header__button">
            Регистрация
          </Link>
        </Route>
        <Route path="/sign-up">
          <Link to="/sign-in" className="button header__button">
            Войти
          </Link>
        </Route>
      </Switch>
    </header>
  );
};

export default Header;
