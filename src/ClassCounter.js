import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super();
    this.state = { number: 0 };
  }
  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };

  handleDecrement = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    return (
      <>
        <h1> Counter {this.state.number} </h1>
        <button onClick={this.handleClick}> Increase </button>
        <button onClick={this.handleDecrement}> Decrease</button>
        <hr />
      </>
    );
  }
}

export default Counter;
