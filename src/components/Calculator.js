import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';
import Result from './Result';

function Calculator() {
  const operators = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const [state, setState] = useState({ total: 0, next: '', operation: '' });
  const { next, total, operation } = state;

  const handleClick = (e) => {
    const updateState = calculate(state, e.target.value);
    setState(updateState);
  };

  return (
    <>
      <Result
        total={total}
        operation={operation}
        next={next}
      />
      <div className="calc-buttons">
        {operators.map((item) => (
          <button
            key={item}
            onClick={handleClick}
            type="button"
            value={item}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

export default Calculator;
