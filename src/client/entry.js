import React from 'react';
import router from '../shared/router';
import Flux from '../shared/flux';

const flux = new Flux();

// Get state that was serialized to the DOM server-side
const initialState = document.getElementById('init-data').value;
flux.deserialize(initialState);

// Don't need this because we're populating store from the DOM
//flux.getActions('posts').getPostsFromServer();

router.run((Handler, state) => {
  let params = state.params;
  React.render(<Handler params={params} flux={flux} router={router} />, document.getElementById('app'));
});
