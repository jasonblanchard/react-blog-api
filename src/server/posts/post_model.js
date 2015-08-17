var postFixtures = [
  {
    id: 1,
    title: 'first on server',
    body: 'asdf asdf asdf'
  },
  {
    id: 2,
    title: 'second on server',
    body: 'Zvc zxcv zxcv'
  },
];

function incrementId() {
  return postFixtures.length + 1;
}

export default {
  fetchAll() {
    return Promise.resolve(postFixtures);
  },

  save(postParams) {
    let newPost = {};
    newPost.title = postParams.title;
    newPost.body = postParams.body;
    newPost.id = incrementId();

    postFixtures = postFixtures.concat([newPost]);

    return Promise.resolve(newPost);
  }
}
