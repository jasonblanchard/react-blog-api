import React from 'react';
import {Link} from 'react-router';

export default class SayHello extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: ''}
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    return (
      <div>
        <label htmlFor='hello-name'>Name: </label>
        <input id='hello-name' type="text" onChange={this.handleNameChange.bind(this)} value={this.state.name} />
        <br />
        <Link to='hello' params={{name: this.state.name}}>Say hello to {this.state.name}</Link>
      </div>
    );
  }

}
