import { Store } from 'flummox';

export default class PostStore extends Store {
  constructor(flux) {
    super();

    const postActionIds = flux.getActionIds('posts');
    this.register(postActionIds.createPost, this.handleNewPost);
    this.register(postActionIds.updateNewTitle, this.handleUpdateNewTitle);
    this.register(postActionIds.updateNewBody, this.handleUpdateNewBody);

    this.state = {
      posts: [
        {
          id: 1,
          title: 'testing',
          body: "I'm the first post"
        },
        {
          id: 2,
          title: 'Hello',
          body: "I'm the second post"
        }
      ],
      newTitle: '',
      newBody: ''
    };

    this.nextId = this.state.posts.length + 1;

  }

  incrementId() {
    return this.nextId += 1;
  }

  handleNewPost() {

    let newPost = {
      title: this.state.newTitle,
      body: this.state.newBody,
      id: this.incrementId()
    }

    this.setState({
      posts: this.state.posts.concat([newPost]),
      newTitle: '',
      newBody: ''
    });

    console.log(newPost);
  }

  handleUpdateNewTitle(title) {
    this.setState({
      newTitle: title,
    });
  }

  handleUpdateNewBody(body) {
    this.setState({
      newBody: body,
    });
  }
}
