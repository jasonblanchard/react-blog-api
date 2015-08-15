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

export default {
  all() {
    return Promise.resolve(postFixtures);
  }
}
