import React from 'react';
import './calculator.css';
import Result from './Result';

function Calculator() {
  const operators = ['AC', '+/-', '%', '÷', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  return (
    <>
      <Result />
      <div className="calc-buttons">
        {operators.map((item) => <button key={item} type="button" name={item}>{item}</button>)}
      </div>
    </>
  );
}

export default Calculator;
