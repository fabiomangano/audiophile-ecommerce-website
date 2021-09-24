import React from 'react';
import PropTypes from 'prop-types';
import style from './IconButton.module.scss';

const IconButton = ({ children, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={style.icon_btn}>
      {children}
    </button>
  );
};

IconButton.defaultProps = {
  children: null,
  onClick: undefined,
};

IconButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default IconButton;
