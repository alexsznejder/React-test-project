import React from "react";
import { connect } from "react-redux";
import User from "./User";
import './UserList.css';
import {getAllUsers} from '../app/users/duck/operations'
import actions from '../app/users/duck/actions'

class UserList extends React.Component{
  // usersList = this.props.users.list.map(user => <User key={user.id} user={user} />);
  
  componentDidMount = () => {
    this.props.reset()
    this.props.getAllUsers()
    // this.usersList = this.props.users.list.map(user => <User key={user.id} user={user} />);
  }

  render() {
  return (
    <div className="users">
      <div className="box">
        {/* {this.usersList} */}
        {this.props.users.list.map(user => <User key={user.id} user={user} />)}
      </div>
    </div>
  );
  }
};

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  getAllUsers: () => dispatch(getAllUsers()),
  reset: () => dispatch(actions.reset())
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserList);