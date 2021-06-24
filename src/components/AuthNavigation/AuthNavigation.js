import React from "react";
import { Button } from "@material-ui/core";

import "./AuthNavigation.css";

import { useHistory } from "react-router-dom";

const AuthNavigation = () => {
  const history = useHistory();
  return (
    <>
      <h1 className="navigation-title">Navigation</h1>
      <div className="button-container">
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/")}
        >
          Log In
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/register")}
        >
          Register
        </Button>
      </div>
    </>
  );
};

export default AuthNavigation;
