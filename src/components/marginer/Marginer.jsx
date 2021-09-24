import React from 'react';
import PropTypes from 'prop-types';

const Marginer = ({ direction, margin }) => {
  if (direction === 'vertical')
    return <span style={{ display: 'flex', width: `${margin}rem` }} />;
  return <span style={{ display: 'flex', height: `${margin}rem` }} />;
};

Marginer.defaultProps = {
  direction: 'horizontal',
};

Marginer.propTypes = {
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  margin: PropTypes.number.isRequired,
};

export default Marginer;
