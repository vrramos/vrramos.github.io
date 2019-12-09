import React from 'react';
import './App.css';

class Test extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        {this.props.children}
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Test name={"Victor!"}>
          <h2>Ola de novo</h2>
        </Test>
      </div>
    );
  }
}

export default App;
