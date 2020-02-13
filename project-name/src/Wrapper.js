import React, {Component} from 'react';

class Wrapper extends Component {

  render() {
    const {children} = this.props;
    return (
      // <div>{children}</div>
      <div>
        hello
      </div>
    );
  }
}

export default Wrapper;