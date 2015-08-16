import { Actions } from 'flummox';
import Qajax from 'qajax'

export default class PostActions extends Actions {

  getPostsFromServer() {
    return Qajax('/api/posts')
    .then((data) => {
      return JSON.parse(data.response);
    });
  }

  createPost(postParams) {
    return Qajax({url: "/api/posts/",
                 method: 'POST',
                 data: postParams
    })
    .then((data) => {
      return JSON.parse(data.response);
    });
  }

  updateNewTitle(title) {
    return title;
  }

  updateNewBody(body) {
    return body;
  }

}
