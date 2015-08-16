import React from 'react';
import routes from '../shared/routes';
import router from '../shared/router';
import Flux from '../shared/flux';

const flux = new Flux();
const initialState = document.getElementById('init-data').value;
flux.getActions('posts').getPostsFromServer();
flux.deserialize(initialState);

router.run((Handler, state) => {
  let params = state.params;
  React.render(<Handler params={params} flux={flux} router={router} />, document.getElementById('app'));
});
