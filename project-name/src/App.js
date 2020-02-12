import React, {Component} from 'react';

class App extends Component {

  state = {
    username: '',
    password: '',
    list: []
  };

  hadleChange = e => {
    // const name = e.target.name;
    // const value = e.target.value;
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  };

  handleInsert = () => {
    const {username, password, list} = this.state;

    this.setstate({
      list: this.state.list.concat({
        username: username,
        password: password
      }),
      username: '',
      password: ''
    })
  }

  render(){
    return (
      <div>
        <input name="username" value={this.state.username} onChange={this.hadleChange}/>
        <input name="password" value={this.state.password} onChange={this.hadleChange}/>
        <button onClick={this.handleInsert}>추가하기</button>

        <ul>
          {this.state.list.map(item => {
            return <li>{item.username}의 비밀번호는 {item.password}
            </li>
          }
          )}
        </ul>
      </div>
    )
  }
}

export default App;