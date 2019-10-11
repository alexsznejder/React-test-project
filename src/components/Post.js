import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post, user, deletePost }) => {
  return (
    <li className="post">
      <div className="icon">
        <i onClick={() => deletePost(post.id)} className="fa fa-trash fa-lg" />
      </div>
      <p>{post.title}</p>
      <div className="icon">
        <Link to={`/user/${user.id}/${post.id}`}>
          <i className="fa fa-chevron-right fa-lg" />
        </Link>
      </div>
    </li>
  );
};
export default Post;
