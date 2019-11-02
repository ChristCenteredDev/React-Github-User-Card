import React, { Component } from 'react';

class Followers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>{this.props.followers.login}</h1>;
  }
}

export default Followers;
