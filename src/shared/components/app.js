import React from 'react';
import { Link, RouteHandler } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Link to='app'>
          <h1>Blahrg</h1>
        </Link>
        <ul>
          <li><Link to='about'>About</Link></li>
          <li><Link to='sayHello'>Say Hello</Link></li>
          <li><Link to='blog'>Blog</Link></li>
        </ul>
        <div aria-live="polite" className='main-content'>
          <RouteHandler {...this.props} role="alert" aria-live="polite" />
        </div>

      </div>
    );
  }
}
