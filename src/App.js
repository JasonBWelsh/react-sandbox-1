import React, { Component } from 'react';
import Header from './Components/Header';
import { Main } from './Components/Main';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNum : 3,
      currentLetter : 'z',
      isTrue: true
    };
    this.toggleTruth = this.toggleTruth.bind(this);
  }

  // function to wrap setState call
  toggleTruth() {
    const truth = this.state.isTrue === true ? false : true;
    this.setState({
      isTrue : truth
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main isDayTime={true} />
      </div>
    );
  }
}

export default App;
