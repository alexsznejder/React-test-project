import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import actions from '../app/comments/duck/actions'
import "./PostDetails.css"
import Modal from 'react-modal'
import Comment from "./Comment"
import {getAllComments} from '../app/comments/duck/operations'

class PostDetails extends React.Component {

  state = {
    show: false,
    isActive: false
  }

  user = this.props.users.list.find(user => user.id == this.props.match.params.userId);
  post = this.props.posts.list.find(post => post.id == this.props.match.params.postId);
  postComments = this.props.comments.list.filter(comment => comment.postId == this.post.id);
  commentsList = this.postComments.map(comment => <Comment key={comment.id} comment={comment}/>);

  handleShowClick = () => {
    this.setState({
      show: !this.state.show
    })
  }

  openModal = () => {
    this.setState({
      isActive: true
    })
  }

  closeModal = () => {
    this.setState({
      isActive: false
    })
  }

  componentDidMount = () => {
    this.props.reset()
    this.props.getAllComments()
  }

  render() {
  return (
    <>
      <header>
          <div className="icon">
            <Link to={`/user/${this.user.id}`}>
              <i className="fa fa-arrow-left fa-3x" />
            </Link>
          </div>
          <h1>{this.user.name}</h1>
      </header>
      <main>
        <h2>{this.post.title}</h2>
          <article>
            {this.post.body}
          </article>
          <span className="showComment" onClick={this.handleShowClick}>{this.state.show ? "Hide comments" : "Show comments"}</span>
          <span className="addComment" onClick={this.openModal}>Add comment</span>
          {this.state.show && <ul className="comments">{this.commentsList}</ul>}

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
              <button className="blueButton" >Save</button>
            </div>
          </form>
        </Modal>
      </main>
      </>
  );}
};

const mapStateToProps = state => ({
  comments: state.comments,
  posts: state.posts,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  getAllComments: () => dispatch(getAllComments()),
  add: comment => dispatch(actions.add(comment)),
  reset: () => dispatch(actions.reset())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(PostDetails);
