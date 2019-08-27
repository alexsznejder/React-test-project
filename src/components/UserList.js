import React from "react";
import { connect } from "react-redux";
import User from "./User";
import "./UserList.css";
import { getUsers } from "../app/users/duck";

class UserList extends React.Component {
  componentDidMount = () => {
    this.props.getUsers();
  };

  usersList = () => {
    const { users } = this.props;
    return users.list.map(user => <User key={user.id} user={user} />);
  };

  render() {
    return (
      <div className="users">
        <div className="box">{this.usersList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  { getUsers }
)(UserList);
