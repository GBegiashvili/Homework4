import React, { useCallback, useEffect, Suspense } from "react";

import { useSelector, useDispatch } from "react-redux";
import { SET_USER_LIST } from "../../redux/actions";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";

const UserItem = React.lazy(() => import("../../components/UserItem/UserItem"));

const Main = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);

  const getData = useCallback(() => {
    if (localStorage.getItem("token")) {
      axios
        .get("https://reqres.in/api/users?page=2")
        .then((res) => dispatch(SET_USER_LIST(res.data.data)));
    } else {
      history.push("/");
    }
  }, [userList]);

  useEffect(() => {
    getData();
  }, []);

  const logOutHandler = () => {
    history.push("/");
    localStorage.clear();
  };

  return (
    <div>
      <Button
        style={{ marginTop: 15 }}
        variant="contained"
        color="primary"
        onClick={logOutHandler}
      >
        Log out
      </Button>
      <Suspense fallback={<div>Loading...</div>}>
        {userList.length > 0 &&
          userList.map((user) => {
            return <UserItem user={user} key={user.id} />;
          })}
      </Suspense>
    </div>
  );
};

export default Main;
