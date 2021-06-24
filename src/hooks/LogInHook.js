import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useLogInHook = () => {
  const history = useHistory();

  const [logInResult, setLogInResult] = useState();
  const logInHandler = (email, password) => {
    if (email && password) {
      axios
        .post("https://reqres.in/api/login", {
          email,
          password,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          history.push("/main");
        })
        .catch(() =>
          setLogInResult(
            "Could not log in error try using following emai: eve.holt@reqres.in"
          )
        );
    }
  };

  return [logInHandler, logInResult];
};

export default useLogInHook;
