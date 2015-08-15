import postRoutes from './posts/routes';

export default {
  init(app) {
    app.use('/api/posts', postRoutes);
  }
}
