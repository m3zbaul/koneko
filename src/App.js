import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div id='main-container' className='container'>
        <h2>React-boilerplate</h2>
        {this.props.children}
      </div>
    );
  }
}

export default App;
