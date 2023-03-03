/* eslint-disable react/prop-types */

import React from 'react';

function Result({ total, next, operation }) {
  return (
    <div className="result" data-testid="result">
      {total}
      {' '}
      {operation}
      {' '}
      {next}
    </div>
  );
}

export default Result;
