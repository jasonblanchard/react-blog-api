import React from 'react';
import { Link, RouteHandler } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Blahrg</h1>
        <ul>
          <li><Link to='app'>Home</Link></li>
          <li><Link to='about'>About</Link></li>
        </ul>
        <RouteHandler {...this.props} />

      </div>
    );
  }
}
