import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import "./UserItem.css";
const UserItem = ({ user }) => {
  const { first_name, last_name, avatar } = user;
  return (
    <div className="main-container">
      <Avatar alt={"Image"} src={avatar} className="main-image" />
      <Typography variant="h4" style={{ width: "35%" }} component="h4">
        {first_name} {last_name}
      </Typography>
    </div>
  );
};

export default UserItem;
