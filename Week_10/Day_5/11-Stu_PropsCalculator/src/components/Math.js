import React from "react";

const Math = (props) => {
    console.log(props);
    let result;

    switch(props.operator) {
        case "+":
            result = props.num1 + props.num2;
            break;

        case "-":
            result = props.num1 - props.num2;
            break;

        case "*":
            result = props.num1 * props.num2;
            break;

        case "/":
            result = props.num1 / props.num2;
            break;
        
        default: 
            result = NaN;
    }
    return (<span>{result}</span>);
}

export default Math;