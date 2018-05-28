import React, { Component } from 'react';
import { Nav } from './Nav';

// renders Nav exports to App.js
class Header extends Component {

  doAThing() {
    console.log('I did a thing');
  }

  render() {
    return (
      <header onClick={this.doAThing}>
        <h1>Hi</h1>
        <Nav />
      </header>
    );
  }
}

export default Header;
