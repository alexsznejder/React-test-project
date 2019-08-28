import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./PostDetails.css";
import Modal from "react-modal";
import Comment from "./Comment";
import {
  getComments,
  addComment,
  incrementCounter
} from "../app/comments/duck";

class PostDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showComments: false,
      isActive: false,
      user: this.props.users.list.find(
        user => user.id == this.props.match.params.userId
      ),
      post: this.props.posts.list.find(
        post => post.id == this.props.match.params.postId
      ),
      name: "",
      email: "",
      body: ""
    };
  }

  handleShowClick = () => {
    this.setState({
      showComments: !this.state.showComments
    });
  };

  handleSaveClick = e => {
    e.preventDefault();
    const comment = {
      postId: this.state.post.id,
      id: this.props.comments.counter + 1,
      name: this.state.name,
      email: this.state.email,
      body: this.state.body
    };
    this.props.addComment(comment);
    this.props.incrementCounter();

    this.setState({
      name: "",
      email: "",
      body: "",
      isActive: false
    });
    console.log(comment);
  };

  handleChange = e => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  };

  openModal = () => {
    this.setState({
      isActive: true
    });
  };

  closeModal = () => {
    this.setState({
      isActive: false
    });
  };

  componentDidMount = () => {
    this.props.getComments();
  };

  commentsList = () => {
    const postComments = this.props.comments.list.filter(
      comment => comment.postId == this.state.post.id
    );
    return postComments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ));
  };

  render() {
    const { post, user } = this.state;

    return (
      <>
        <header>
          <div className="icon">
            <Link to={`/user/${user.id}`}>
              <i className="fa fa-arrow-left fa-3x" />
            </Link>
          </div>
          <h1>{user.name}</h1>
        </header>
        <main>
          <h2>{post.title}</h2>
          <article>{post.body}</article>
          <span className="showComment" onClick={this.handleShowClick}>
            {this.state.showComments ? "Hide comments" : "Show comments"}
          </span>
          <span className="addComment" onClick={this.openModal}>
            Add comment
          </span>
          {this.state.showComments && (
            <ul className="comments">{this.commentsList()}</ul>
          )}

          <Modal className="Modal" isOpen={this.state.isActive}>
            <h1>Add post</h1>
            <form noValidate onSubmit={this.handleSaveClick}>
              <div className="row">
                <div className="labels">
                  <label htmlFor="title">Title</label>
                </div>
                <div className="inputs">
                  <input
                    id="title"
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="labels">
                  <label htmlFor="email">Email</label>
                </div>
                <div className="inputs">
                  <input
                    id="email"
                    type="text"
                    name="email"
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="labels">
                  <label htmlFor="body">Body</label>
                </div>
                <div className="inputs">
                  <textarea
                    id="body"
                    name="body"
                    onChange={this.handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <button onClick={() => this.closeModal()}>Cancel</button>
                <button className="blueButton">Save</button>
              </div>
            </form>
          </Modal>
        </main>
      </>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
  posts: state.posts,
  users: state.users
});

export default connect(
  mapStateToProps,
  { getComments, addComment, incrementCounter }
)(PostDetails);
