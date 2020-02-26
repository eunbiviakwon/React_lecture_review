import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state = {
    data: null
  };

  handleClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      this.setState({
        data: response.data
      });
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>데이터 불러오기</button>
        <ul>
          this.state.data && this.state.data.map(item => {
            return <li key={item.id}>{item.title}</li>
          }
          )
        </ul>
      </div>
    );
  }
}

export default App;