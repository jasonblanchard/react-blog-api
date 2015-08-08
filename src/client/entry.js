import React from 'react';
import Router from 'react-router';
import routes from '../shared/routes';

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  let params = state.params;
  React.render(<Handler params={params} />, document.getElementById('app'));
});
