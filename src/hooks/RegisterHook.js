import { useState } from "react";

import axios from "axios";

const useRegisterHook = () => {
  const [registerResult, setRegisterResult] = useState();
  const registerHandler = (email, password) => {
    const validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email && password) {
      if (validEmail.test(email)) {
        axios
          .post("https://reqres.in/api/register", {
            email,
            password,
          })
          .then(() => {
            setRegisterResult(`Registration was succesfull`);
          })
          .catch(() =>
            setRegisterResult(
              "Could not register error try using following email: eve.holt@reqres.in"
            )
          );
      } else {
        setRegisterResult("Validation error: Wrong email format");
      }
    }
  };

  return [registerHandler, registerResult];
};

export default useRegisterHook;
