import React, { Component } from 'react';
import Wrapper from './Wrapper';
import Name from './Name';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
     <Wrapper>
       <Name />
       <Counter />
     </Wrapper>
    );
  }
}

export default App;
