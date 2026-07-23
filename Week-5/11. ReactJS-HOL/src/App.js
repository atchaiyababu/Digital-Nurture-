import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      rupees: "",
      euro: ""
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  sayHello = () => {
    alert("Hello! Welcome to React Event Handling.");
  };

  handleIncrement = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (message) => {
    alert(message);
  };

  onPress = () => {
    alert("I was clicked");
  };

  handleChange = (event) => {
    this.setState({
      rupees: event.target.value
    });
  };

  handleSubmit = () => {
    const euro = (this.state.rupees / 90).toFixed(2);
    this.setState({
      euro: euro
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>React Event Handling</h1>

        <h2>Counter: {this.state.count}</h2>

        <button onClick={this.handleIncrement}>
          Increment
        </button>

        &nbsp;&nbsp;

        <button onClick={this.decrement}>
          Decrement
        </button>

        <br /><br />

        <button onClick={() => this.sayWelcome("Welcome")}>
          Say Welcome
        </button>

        <br /><br />

        <button onClick={this.onPress}>
          OnPress
        </button>

        <hr />

        <h2>Currency Convertor</h2>

        <input
          type="number"
          placeholder="Enter Amount in INR"
          value={this.state.rupees}
          onChange={this.handleChange}
        />

        <br /><br />

        <button onClick={this.handleSubmit}>
          Convert
        </button>

        <h3>Euro: € {this.state.euro}</h3>
      </div>
    );
  }
}

export default App;