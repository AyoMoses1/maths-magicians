/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';

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

Result.propTypes = {
  total: PropTypes.number.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default Result;
