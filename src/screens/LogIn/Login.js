import React, { useRef } from "react";
import { Input, Button } from "@material-ui/core";

import "./Login.css";

import AuthNavigation from "../../components/AuthNavigation/AuthNavigation";

import useLogInHook from "../../hooks/LogInHook";

const Login = () => {
  const [logInHandler, logInResult] = useLogInHook();

  const emailRef = useRef();
  const passwordRef = useRef();

  const logInAPI = () => {
    logInHandler(emailRef.current.value, passwordRef.current.value);
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="log-in-container">
      <h1 className="log-in-title">Log In</h1>
      <Input
        inputRef={emailRef}
        placeholder="E-mail"
        type={"email"}
        className={"log-in-input"}
      />
      <Input
        placeholder="Password"
        type={"password"}
        inputRef={passwordRef}
        className={"log-in-input"}
      />
      {logInResult && <p>{logInResult}</p>}
      <Button
        style={{ marginTop: 15 }}
        variant="contained"
        color="primary"
        onClick={() => logInAPI()}
      >
        Confirm Login
      </Button>
      <AuthNavigation />
    </div>
  );
};

export default Login;
