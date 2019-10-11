import React from "react";
import { Switch, Route } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import PostDetails from "./PostDetails";

const Page = () => {
  return (
    <Switch>
      <Route path="/" exact component={UserList} />
      <Route path="/user/:userId" exact component={UserDetails} />
      <Route path="/user/:userId/:postId" component={PostDetails} />
    </Switch>
  );
};
export default Page;
