import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <div className="user">
      <label className="name">{user.name}</label>
      <p className="blue">
        {user.email}<br/>
        {user.phone}<br/>
        {user.website}
      </p>
      <p>
        {user.company.name}<br/>
        {user.company.catchPhrase}<br/>
        <strong>{user.company.bs}</strong>
      </p>
      <div className="details">
        <Link to={`/user/${user.id}`}>
          Details
        </Link>      
      </div>
    </div>
  );
};

export default User;
