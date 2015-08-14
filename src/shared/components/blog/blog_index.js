import React from 'react';

export default class BlogIndex extends React.Component {

  renderPost(post) {
    return (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    );
  }

  render() {
    return (
      <div>
      {this.props.posts.map(this.renderPost)}
      </div>
    );
  }
}
