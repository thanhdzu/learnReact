import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      click: 0,
      show: true
    };
  }

  incrementItem = () => {
    this.setState({click: this.state.click +1});
    console.log(this.state.click);
  }

  decreaseItem = () => {
    this.setState({click: this.state.click -1});
    console.log(this.state.click);
  }
  
  toggleClick = () => {
    this.setState({show: !this.state.show});
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.incrementItem}>Click to increment by 1</button>
        <button onClick={this.decreaseItem}>Click to decrease by 1</button>
        <button onClick={this.toggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
      </div>
    );
  }
}

export default App;
