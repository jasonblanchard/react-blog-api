import { Flummox } from 'flummox';
import PostStore from './stores/post_store';
import PostActions from './actions/post_actions';

export default class flux extends Flummox {

  constructor() {
    super();

    const postActions = this.createActions('posts', PostActions);
    this.createStore('posts', PostStore, this);
  }

}
