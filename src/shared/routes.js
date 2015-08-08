import { Route, DefaultRoute } from 'react-router';
import React from 'react';
import App from './components/app';
import About from './components/about';
import Home from './components/home';
import Hello from './components/hello';
import SayHello from './components/say_hello';
import Blog from './components/blog/blog';

export default (
  <Route name='app' handler={App} path='/'>
    <Route name='about' handler={About} />
    <Route name='hello' path='hello/:name' handler={Hello} />
    <Route name='sayHello' path='/hello' handler={SayHello} />
    <Route name='blog' path='/blog' handler={Blog} />
    <DefaultRoute handler={Home} />
  </Route>
);
