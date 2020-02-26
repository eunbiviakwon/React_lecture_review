import React, { Component } from 'react';

class App extends Component {
  state = {
    username: '',
    job: ''
  };
  handleChange = e => {
    const {value, name} = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;