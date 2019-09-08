import React from "react";
import Post from "./Post";
import "../styles/UserDetails.css";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import ModalRow from "./ModalRow";
import { connect } from "react-redux";
import {
  getPosts,
  addPost,
  deletePost,
  incrementCounter
} from "../app/posts/duck";
import { Formik } from "formik";

Modal.setAppElement("#root");

class UserDetails extends React.Component {
  state = {
    isActive: false,
    user: this.props.users.list.find(
      user => user.id === parseInt(this.props.match.params.userId)
    )
  };

  openModal() {
    this.setState({
      isActive: true
    });
  }

  closeModal() {
    this.setState({
      isActive: false
    });
  }

  deletePost = id => {
    this.props.deletePost(id);
  };

  componentDidMount = () => {
    this.props.getPosts();
  };

  postsList = () => {
    const userPosts = this.props.posts.list.filter(
      post => post.userId === parseInt(this.state.user.id)
    );
    return userPosts.map(post => (
      <Post
        key={post.id}
        post={post}
        user={this.state.user}
        deletePost={this.deletePost}
      />
    ));
  };

  render() {
    if (this.props.posts.isLoading) {
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
            <Link to="/">
              <i className="fa fa-arrow-left fa-3x" />
            </Link>
          </div>
          <h1>{this.state.user.name}</h1>
          <div className="icon">
            <i
              onClick={() => this.openModal()}
              className="fa fa-plus-circle fa-3x"
            />
          </div>
        </header>
        <main>
          <ul className="posts">{this.postsList()}</ul>
          <Modal className="Modal" isOpen={this.state.isActive}>
            <Formik
              initialValues={{ title: "", body: "" }}
              validate={values => {
                let errors = {};
                if (!values.title) {
                  errors.title = "Required";
                } else if (!values.body) {
                  errors.body = "Required";
                }
                return errors;
              }}
              onSubmit={async values => {
                const post = {
                  userId: this.state.user.id,
                  id: this.props.posts.counter + 1,
                  title: values.title,
                  body: values.body
                };
                await this.props.addPost(post);
                this.props.incrementCounter();
                this.setState({
                  isActive: false
                });
              }}
            >
              {({
                values,
                errors,
                handleChange,
                handleSubmit,
                handleBlur,
                isSubmitting
              }) => (
                <form onSubmit={handleSubmit}>
                  <h1>Add post</h1>
                  <ModalRow
                    type="text"
                    errors={errors}
                    name="title"
                    label="Title"
                    value={values.title}
                    handleChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ModalRow
                    type="textarea"
                    errors={errors}
                    name="body"
                    label="Body"
                    value={values.body}
                    handleChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="row">
                    <button onClick={() => this.closeModal()}>Cancel</button>
                    <button
                      className="blueButton"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Save
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </Modal>
        </main>
      </>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { getPosts, addPost, deletePost, incrementCounter }
)(UserDetails);
