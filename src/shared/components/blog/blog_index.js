import React from 'react';

export default class BlogIndex extends React.Component {

  addPost(e) {
    e.preventDefault();
    // TODO Temporary before building form
    let postParams = {title: 'New from UI', body: "I was just created"};
    this.props.flux.getActions('posts').createPost(postParams);
  }
  
  renderPost(post) {
    return (
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    );
  }

  render() {
    return (
      <div>
      <a href='' onClick={this.addPost.bind(this)}>Add Post</a>
      {this.props.posts.map(this.renderPost)}
      </div>
    );
  }
}
