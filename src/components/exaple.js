import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initialize your component's state here
      // State is used to store data that may change over time
      // and trigger a re-render when updated.
      counter: 0
    };
  }

  // You can define other methods in your class-based component

  handleIncrement = () => {
    // Updating the state triggers a re-render
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    // The render method is required for a React component.
    // It defines what the component will render to the DOM.
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
