import React from "react";
import PanelBody from "./PanelBody";

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1});
  }

  
  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Click Counter!</div>
        <div className="panel-body text-center">
          <p>Click Count: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button> <hr/>       
          <button className="btn btn-primary" onClick={this.handleDecrement}>
            Decrement
          </button>
          <button className="btn btn-primary" onClick={this.handleReeecrement}>
            Reeecrement
          </button>
          <div>
            {this.state.rees}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Click Counter!</div>
        <PanelBody 
          count={this.state.count} 
          handleIncrement={this.handleIncrement} 
          handleDecrement={this.handleDecrement} 
        />
      </div>
    );
  }
}

export default Counter;
