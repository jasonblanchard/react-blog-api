import React from 'react';
import BlogIndex from './blog_index';
import FluxComponent from 'flummox/component';
import Flux from '../../flux';
import { Link, RouteHandler } from 'react-router';

var flux = new Flux;

export default class Blog extends React.Component {
  render() {
    return (
      <div>
         <h2>This is the blog</h2>
         <Link to='newPost'>New Post Form</Link>
         <FluxComponent flux={flux} connectToStores={['posts']}>
           <RouteHandler {...this.props} />
         </FluxComponent>
      </div>
    );
  }
}
