import { Route, DefaultRoute } from 'react-router';
import React from 'react';
import App from './components/app';
import About from './components/about';
import Home from './components/home';

export default (
  <Route name='app' handler={App} path='/'>
    <Route name='about' handler={About} />
    <DefaultRoute handler={Home} />
  </Route>
);
