import React, {Component} from 'react';

class Wrapper extends Component {

  render() {
    const {children} = this.props;
    return (
      <div>{children}</div>
    );
  }
}

export default Wrapper;