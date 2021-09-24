import React from 'react';
import PropTypes from 'prop-types';
import style from './CategoryPageHeader.module.scss';

const CategoryPageHeader = ({ category }) => {
  return (
    <div className={style.container}>
      <h2>{category}</h2>
    </div>
  );
};

CategoryPageHeader.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryPageHeader;
