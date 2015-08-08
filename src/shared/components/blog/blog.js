import React from 'react';
import BlogIndex from './blog_index';
import FluxComponent from 'flummox/component';
import Flux from '../../flux';

var flux = new Flux;

export default class Blog extends React.Component {
  render() {
    return (
      <div>
         <h2>This is the blog</h2>
         <FluxComponent flux={flux} connectToStores={['posts']}>
           <BlogIndex />
         </FluxComponent>
      </div>
    );
  }
}
