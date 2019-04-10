import React, { Component } from 'react';
import TopNavigationMenu from './components/Menu/TopNavigation';


class App extends Component {
  render() {
    return (
      <div id='main-container' className='container'>
        <TopNavigationMenu/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
