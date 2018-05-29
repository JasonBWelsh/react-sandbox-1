import React, { Component } from 'react';

export class Main extends Component { // Rendered in App.js
  render() {
    if (this.props.isDayTime) {
      return (
        <h1>Day Time</h1>
      );
    } else {
      return <h1>Night Time</h1>
    }
  }
}
