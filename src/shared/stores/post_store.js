import { Store } from 'flummox';

export default class PostStore extends Store {
  constructor(flux) {
    super();

    const postActionIds = flux.getActionIds('posts');
    this.register(postActionIds.createPost, this.handleNewPost);
    
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
      ]
    };
  }

  handleNewPost(postParams) {
    this.setState({
      posts: this.state.posts.concat([postParams])
    });
  }
}
