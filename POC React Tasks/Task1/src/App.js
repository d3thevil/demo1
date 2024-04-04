import React, { useState } from 'react';

class Class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count - 1 < 0) {
      this.setState({ count: 0 });
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <>
        <h1>Class Based Component : {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </>
    );
  }
}

function Function() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count => count + 1);

  const decrement = () => {
    setCount(count => {
      if (count - 1 < 0) {
        return 0;
      } else {
        return count - 1;
      }
    });
  };
  
  const reset = () => setCount(0);

  return (
    <>
      <h1> Function Based Component : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

function App() {
  return (
    <div>
      <Class />
      <Function />
    </div>
  );
}

export default App;
