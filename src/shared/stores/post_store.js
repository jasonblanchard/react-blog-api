import { Store } from 'flummox';

export default class PostStore extends Store {
  constructor(flux) {
    super();

    const postActionIds = flux.getActionIds('posts');
    this.registerAsync(postActionIds.createPost, null, this.handleNewPost);
    this.register(postActionIds.updateNewTitle, this.handleUpdateNewTitle);
    this.register(postActionIds.updateNewBody, this.handleUpdateNewBody);
    this.registerAsync(postActionIds.getPostsFromServer, this.handleStartFetchingPosts, this.handleUpdateAllPosts, null);
    this.register(postActionIds.hydratePosts, this.handleUpdateAllPosts);

    this.state = {
      posts: [],
      newTitle: '',
      newBody: '',
      loading: false
    };

    this.nextId = this.state.posts.length + 1;

  }

  static serialize(state) {
    return JSON.stringify(state);
  }

  static deserialize(state) {
    return JSON.parse(state);
  }

  handleStartFetchingPosts() {
    this.setState({
      loading: true
    });
  }

  handleUpdateAllPosts(posts) {
    this.setState({
      posts: posts,
      loading: false
    });
  }

  handleNewPost(newPost) {
    this.setState({
      posts: this.state.posts.concat([newPost]),
      newTitle: '',
      newBody: ''
    });
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
