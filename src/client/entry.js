import React from 'react';
import routes from '../shared/routes';
import router from '../shared/router';
import a11y from 'react-a11y';

a11y(React);

router.run((Handler, state) => {
  let params = state.params;
  React.render(<Handler params={params} router={router} />, document.getElementById('app'));
});
