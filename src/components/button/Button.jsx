/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import style from './Button.module.scss';

const Button = ({ children, type, onClick, variant, size }) => {
  return (
    <button
      className={cn(style[variant], style[size])}
      type={type}
      onClick={onClick}
      variant={variant}
      size={size}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  children: null,
  onClick: undefined,
  variant: 'primary',
  size: 'md',
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'link']),
  children: PropTypes.node,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['md']),
};

export default Button;
