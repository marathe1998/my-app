import React, { Component } from "react";

export default class addition extends Component {
  constructor(props) {
    super(props);
    this.state = { a: 0 };
  }

  increment = () => {
    this.setState({ a: this.state.a + 1 });
  };

  decrement = () => {
    this.setState({ a: this.state.a - 1 });
  };

  render() {
    return (
      <div>
        <h1>Lalit</h1>
        <button onClick={() => this.increment()}>Addition</button>
        <button onClick={() => this.decrement()}>Subtraction</button>
        <h1>Value is {this.state.a}</h1>
      </div>
    );
  }
}
