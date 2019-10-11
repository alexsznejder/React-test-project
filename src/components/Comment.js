import React from "react";

const Comment = ({ comment }) => {
  return (
    <li className="comment">
      <div className="header">
        <label>
          <strong>{comment.name}</strong>
        </label>
        <span>{comment.email}</span>
      </div>
      <p>{comment.body}</p>
    </li>
  );
};
export default Comment;
