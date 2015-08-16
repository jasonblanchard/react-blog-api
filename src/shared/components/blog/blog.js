import React from 'react';
import BlogIndex from './blog_index';
import FluxComponent from 'flummox/component';
import Flux from '../../flux';
import {RouteHandler } from 'react-router';

var flux = new Flux;

export default class Blog extends React.Component {
  
  componentDidMount() {
    flux.getActions('posts').getPostsFromServer();
  }

  render() {
    return (
      <div>
         <h2>This is the blog</h2>
         <FluxComponent flux={flux} connectToStores={['posts']}>
           <RouteHandler {...this.props} />
         </FluxComponent>
      </div>
    );
  }
}
