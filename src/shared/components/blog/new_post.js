import React from 'react';

export default class NewPost extends React.Component {

  handleChangeTitle(e) {
    let title = e.target.value;
    this.props.flux.getActions('posts').updateNewTitle(title);
  }

  handleChangeBody(e) {
    let body = e.target.value;
    this.props.flux.getActions('posts').updateNewBody(body);
  }

  handleSubmit() {
    this.props.flux.getActions('posts').createPost({
      title: this.props.newTitle,
      body: this.props.newBody
    });
    this.props.router.transitionTo('blog');
  }
  
  render() {
    return (
      <div>
        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          id='title'
          value={this.props.newTitle}
          onChange={this.handleChangeTitle.bind(this)}
        />
        <br />
        <label htmlFor='body'>Body:</label>
        <textarea
          id='body'
          value={this.props.newBody}
          onChange={this.handleChangeBody.bind(this)}
        >
        </textarea>
        <br />
        <button onClick={this.handleSubmit.bind(this)} >Create Post</button>
      </div>
    )
  }
}
