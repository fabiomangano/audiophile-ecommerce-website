import React from 'react';
import PropTypes from 'prop-types';
import icons from './icons';

export const DIRECTIONS = {
  TOP: 0,
  RIGHT: 90,
  BOTTOM: 180,
  LEFT: -90,
};

export const ICONS = icons;

const Icon = ({ path, color, size, direction }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <g transform={`rotate(${direction}, 12, 12)`}>
        <path fill={color} d={path} />
      </g>
    </svg>
  );
};

Icon.propTypes = {
  path: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  direction: PropTypes.number,
};

Icon.defaultProps = {
  size: 24,
  color: 'currentColor',
  direction: DIRECTIONS.TOP,
};

export default Icon;
