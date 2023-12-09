import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  handleIncrease = () => {
    this.setState({ number: this.state.number + 1 });
  };

  handleDecrease = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    return (
      <div className="App">
        <h2>Class Counter</h2>
        <button onClick={this.handleIncrease}>Increase Count</button>
        <button onClick={this.handleDecrease}>Decrease Count</button>
        <h2>{this.state.number}</h2>
      </div>
    );
  }
}

export default ClassCounter;