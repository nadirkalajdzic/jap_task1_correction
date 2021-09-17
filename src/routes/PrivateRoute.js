import React from "react";
import { Route, Redirect } from "react-router-dom";
import links from "../links/links";

function PrivateRoute({ title, exact, path, component, authorize }) {
  if (authorize !== undefined && localStorage.getItem("session") != null)
    return <Redirect to={links.home.url} />;

  document.title = `Moviesapp | ${title}`;

  return <Route exact={exact} path={path} component={component} />;
}

export default PrivateRoute;
