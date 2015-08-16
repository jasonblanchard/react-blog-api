import React from 'react';
import BlogIndex from './blog_index';
import FluxComponent from 'flummox/component';
import {RouteHandler } from 'react-router';

export default class Blog extends React.Component {
  
  render() {
    return (
      <div>
         <h2>This is the blog</h2>
         <FluxComponent flux={this.props.flux} connectToStores={['posts']}>
           <RouteHandler {...this.props} />
         </FluxComponent>
      </div>
    );
  }
}
