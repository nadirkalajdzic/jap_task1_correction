import React from "react";
import { Link } from "react-router-dom";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import Page from "../../components/Page/Page";
import RegisterPageForm from "../../components/RegisterPageForm/RegisterPageForm";
import links from "../../links/links";

function RegisterPage() {
  return (
    <Page>
      <div className="auth-page">
        <div className="auth-page-breadcrumbs">
          <Breadcrumbs separator="/">
            <Link className="link-breadcrumb bold" to={links.home.url}>
              Moviesapp
            </Link>
            <div className="auth-page-current">Register</div>
          </Breadcrumbs>
        </div>
        <div className="auth-page-header bold">Register</div>
        <RegisterPageForm />
      </div>
    </Page>
  );
}

export default RegisterPage;
