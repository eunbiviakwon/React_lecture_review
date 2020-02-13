import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  }

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  render() {
    return (
      <div>
        <h1>counter example</h1>
        <div>number : {this.state.number}</div>
        <br />
        <button onClick={this.handleIncrease}>+</button>
      </div>
    );
  }
}

export default Counter;