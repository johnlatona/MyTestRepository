import React from "react";

const PanelBody = (props) => {
    return (
        <div className="panel-body text-center">
        <p>Click Count: {props.count}</p>
        <button className="btn btn-primary" onClick={props.handleIncrement}>
          Increment
        </button>
        <button className="btn btn-primary" onClick={props.handleDecrement}>
          Decrement
        </button>

      </div>
    );
}

export default PanelBody;