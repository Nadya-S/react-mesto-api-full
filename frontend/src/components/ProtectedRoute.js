import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({component: Component, exact, ...props }) => {
    return (
        <Route exact={exact} path={props.path}>
          {props.loggedIn ? <Component {...props} /> : <Redirect to="./sign-in" />}
        </Route>
      );
};

export default ProtectedRoute;