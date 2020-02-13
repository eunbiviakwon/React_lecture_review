import React, { Component } from 'react';

class Name extends Component {
  render() {
    return (
      <div>
        hello <b>{this.props.name}!</b>
      </div>
    );
  }
}

export default Name;