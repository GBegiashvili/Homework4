import React, { useRef } from "react";

import "./Register.css";

import { Input, Button } from "@material-ui/core";

import AuthNavigation from "../../components/AuthNavigation/AuthNavigation";

import useRegisterHook from "../../hooks/RegisterHook";

const Register = () => {
  const [registerHandler, registerResult] = useRegisterHook();

  const emailRef = useRef();
  const passwordRef = useRef();

  const registerAPI = () => {
    registerHandler(emailRef.current.value, passwordRef.current.value);
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Register</h1>
      <Input
        className="register-input"
        placeholder={"Email"}
        name={"email"}
        type={"email"}
        inputRef={emailRef}
      />
      <Input
        className="register-input"
        placeholder={"password"}
        name={"email"}
        type={"password"}
        inputRef={passwordRef}
      />
      {registerResult && <p>{registerResult}</p>}
      <Button
        style={{ marginTop: 15 }}
        variant="contained"
        color="primary"
        onClick={() => registerAPI()}
      >
        Confirm Register
      </Button>
      <AuthNavigation />
    </div>
  );
};

export default Register;
