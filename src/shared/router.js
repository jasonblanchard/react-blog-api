import routes from '../shared/routes';
import Router from 'react-router';

var router = Router.create({
  routes: routes,
  location: Router.HistoryLocation
});

export default router;
