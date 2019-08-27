import React from "react";
import Post from "./Post";
import "./UserDetails.css";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { connect } from "react-redux";
import { getPosts } from "../app/posts/duck";

Modal.setAppElement("#root");

class UserDetails extends React.Component {
  state = {
    isActive: false,
    title: "",
    body: "",
    userId: this.props.match.params.userId
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

  handleChange = e => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  };

  handleSaveClick = e => {
    e.preventDefault();
    const post = {
      userId: this.props.match.params.userId,
      id: this.props.posts.counter + 1,
      title: this.state.title,
      body: this.state.body
    };
    this.props.add(post);
    this.props.increment();
    this.userPosts = this.props.posts.list.filter(
      post => post.userId == this.user.id
    );
    this.postsList = this.userPosts.map(post => (
      <Post key={post.id} post={post} user={this.user} />
    ));
    this.setState({
      title: "",
      body: "",
      isActive: false
    });
    console.log(post);
  };

  deletePost = id => {};

  componentDidMount = () => {
    this.props.getPosts();
  };

  user = this.props.users.list.find(
    user => user.id == this.props.match.params.userId
  );
  userPosts = this.props.posts.list.filter(post => post.userId == this.user.id);
  postsList = this.userPosts.map(post => (
    <Post
      key={post.id}
      post={post}
      user={this.user}
      deletePost={this.deletePost}
    />
  ));

  postsList = () => {
    const userPosts = this.props.posts.list.filter(
      post => post.userId == this.state.userId
    );
    return userPosts.map(post => (
      <Post
        key={post.id}
        post={post}
        user={this.user}
        deletePost={this.deletePost}
      />
    ));
  };

  userName = () =>
    this.props.users.list.find(user => user.id == this.state.userId).name;

  render() {
    return (
      <>
        <header>
          <div className="icon">
            <Link to="/">
              <i className="fa fa-arrow-left fa-3x" />
            </Link>
          </div>
          <h1>{this.userName()}</h1>
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
                    name="title"
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
  users: state.users,
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { getPosts }
)(UserDetails);
