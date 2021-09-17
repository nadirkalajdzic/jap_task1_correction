import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage/LandingPage";
import Page404 from "../pages/Page404/Page404";
import LoginPage from "../pages/LoginPage/LoginPage";
import PrivateRoute from "./PrivateRoute";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import SingleItemPage from "../pages/SingleItemPage/SingleItemPage";
import links from "../links/links";

function Routes() {
  return (
    <Router basename="">
      <Switch>
        <PrivateRoute
          exact
          path={links.landing.url}
          component={LandingPage}
          title="Home"
        />
        <PrivateRoute
          exact
          path={links.home.url}
          component={LandingPage}
          title="Home"
        />
        <PrivateRoute
          exact
          path={links.login.url}
          authorize
          component={LoginPage}
          title="Login"
        />
        <PrivateRoute
          exact
          path={links.register.url}
          authorize
          component={RegisterPage}
          title="Register"
        />
        <PrivateRoute
          exact
          path={links.itemId.url}
          component={SingleItemPage}
          title="Movie"
        />
        <Route path={links.any.url} component={Page404} title="404" />
      </Switch>
    </Router>
  );
}

export default Routes;
