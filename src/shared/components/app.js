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
        </ul>
        <RouteHandler {...this.props} />

      </div>
    );
  }
}
