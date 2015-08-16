import postModel from './post_model';

export default {
  index(req, res) {
    postModel.all().then((posts) => {
      res.json(posts);
    });
  },

  create(req, res) {
    let postParams = req.body;
    console.log(req.body);
    postModel.save(postParams).then((post) => {
      res.json(post);
    });
  }
}
