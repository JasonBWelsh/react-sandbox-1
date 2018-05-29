import React, { Component } from 'react';
import Header from './Components/Header';
import { Main } from './Components/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="I am a title rendered through props" />
        <Main isDayTime={true} />
      </div>
    );
  }
}

export default App;
