import React from 'react';
import { Link } from 'react-router';

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

    let showLoader = () => {
      if (this.props.loading === true) {
        return (<span>Loading...</span>);
      }
    }

    return (
      <div>
      <Link to='newPost'>New Post Form</Link>
      <br />
      {showLoader()}
      {this.props.posts.map(this.renderPost)}
      </div>
    );
  }
}
