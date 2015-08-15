import postModel from './post_model';

export default {
  index(req, res) {
    postModel.all().then((posts) => {
      res.json(posts);
    });
  }
}
