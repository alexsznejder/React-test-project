import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../styles/PostDetails.css";
import Modal from "react-modal";
import ModalRow from "./ModalRow";
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
        user => user.id === parseInt(this.props.match.params.userId)
      ),
      post: this.props.posts.list.find(
        post => post.id === parseInt(this.props.match.params.postId)
      ),
      name: "",
      email: "",
      body: "",
      errors: {}
    };
  }

  handleShowClick = () => {
    this.setState({
      showComments: !this.state.showComments
    });
  };

  handleSaveClick = e => {
    e.preventDefault();
    if (!this.state.name.length > 0) {
      this.setState({
        errors: { name: "Required" }
      });
    } else if (!this.state.email.length > 0) {
      this.setState({
        errors: { email: "Required" }
      });
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)
    ) {
      this.setState({
        errors: { email: "Wrong email adress!" }
      });
    } else if (!this.state.body.length > 0) {
      this.setState({
        errors: { body: "Required" }
      });
    } else {
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
    }
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
      isActive: false,
      errors: {}
    });
  };

  componentDidMount = () => {
    this.props.getComments();
  };

  commentsList = () => {
    const postComments = this.props.comments.list.filter(
      comment => comment.postId === parseInt(this.state.post.id)
    );
    return postComments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ));
  };

  render() {
    const { post, user } = this.state;

    if (this.props.comments.isLoading) {
      return (
        <div className="loading">
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <>
        <header>
          <div className="icon">
            <Link to={`/user/${this.state.user.id}`}>
              <i className="fa fa-arrow-left fa-3x" />
            </Link>
          </div>
          <h1>{user.name}</h1>
        </header>
        <main>
          <h2>{post.name}</h2>
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
              <ModalRow
                type="text"
                errors={this.state.errors}
                name="name"
                label="Title"
                value={this.state.name}
                handleChange={this.handleChange}
              />
              <ModalRow
                type="text"
                errors={this.state.errors}
                name="email"
                label="Email"
                value={this.state.email}
                handleChange={this.handleChange}
              />
              <ModalRow
                type="textarea"
                errors={this.state.errors}
                name="body"
                label="Body"
                value={this.state.body}
                handleChange={this.handleChange}
              />
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
