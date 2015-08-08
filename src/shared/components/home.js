import React from 'react';
import {Link} from 'react-router';

export default class Home extends React.Component {
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
        This is the homepage, homie
        <div>
          <label htmlFor='hello-name'>Say hello to </label>
          <input id='hello-name' type="text" onChange={this.handleNameChange.bind(this)} value={this.state.name} />
          <Link to='hello' params={{name: this.state.name}}>Say hello to {this.state.name}</Link>
        </div>
      </div>
    );
  }
}
