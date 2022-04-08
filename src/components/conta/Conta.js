 import React from "react";
 export default class Conta extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    render() {
      return (
        <div>
          <p>clicca e vedi che succede {this.state.count}</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            incremento
          </button>
          <button onClick={() => this.setState({ count: this.state.count - 1})}>
            decremento
          </button>
        </div>
      );
    }
  }