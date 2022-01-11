import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginPage from "../Pages/LoginPage/LoginPage";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import Home from "../Pages/Home/Home";

const Router = ({ setRightButtonText }) => {
  return (
    <Switch>
      <Route exact path="/login">
        <LoginPage setRightButtonText={setRightButtonText} />
      </Route>
      <Route exact path="/cadastro">
        <SignUpPage setRightButtonText={setRightButtonText} />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>

      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};
export default Router;
