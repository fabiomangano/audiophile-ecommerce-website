import React from 'react';
import PropTypes from 'prop-types';
import style from './CategoryCard.module.scss';
import Button from '../button/Button';

const CategoryCard = ({ category, url, onClick }) => {
  return (
    <div className={style.container}>
      <img className={style.image} src={url} alt={category} />
      <h6>{category}</h6>
      <Button variant="link" onClick={onClick}>
        SHOP {'>'}
      </Button>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CategoryCard;
