// src/App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize the state
    this.state = {
      count: 0
    };
  }

  // Method to increment the count
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  // Method to decrement the count
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  // Method to reset the count
  reset = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Counter: {this.state.count}</h1>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </header>
      </div>
    );
  }
}

export default App;
