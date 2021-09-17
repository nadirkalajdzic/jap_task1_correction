import React from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Page from "../../components/Page/Page";
import "./Page404.css";
import CustomButton from "../../components/CustomButton/CustomButton";

function Page404() {
  const history = useHistory();
  const routeTo = () => history.push("/");

  return (
    <Page>
      <div className="page-error">
        <div>404</div>
        <div>
          <CustomButton
            onClick={routeTo}
            label="Back Home"
            startIcon={<ArrowBackIcon />}
          />
        </div>
      </div>
    </Page>
  );
}

export default Page404;
