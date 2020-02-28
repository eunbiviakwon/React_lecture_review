import React, { Component } from 'react';

class App extends Component {
  state = {
    username: '',
    password: '',
    buttonact: 'disabled'
  };
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    if (e.target.name === 'password') {
      this.setState({
        buttonact : e.target.value.length < 6 ? 'disabled' : false })
    }

  };
  
  render() {
    const {username, password, buttonact} = this.state;
    return (
      <div>
        <input
          name="username"
          placeholder="유저명"
          value={username}
          onChange={e => this.handleChange(e)}
          />
        <input
          name="password"
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={this.handleChange}
        />
        <button type="submit" disabled={buttonact}>submit</button>
      </div>
    );
}
}

export default App;