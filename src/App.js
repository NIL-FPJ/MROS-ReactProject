import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        { this.props.children }
      </div>
    );
  }
}

export default withRouter(App);
