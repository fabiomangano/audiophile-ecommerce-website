import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { LargeScreen } from '../../../../mediaQueries';
import Marginer from '../../../../components/marginer/Marginer';
import Button from '../../../../components/button/Button';
import style from './ProductCard.module.scss';

const ProductCard = ({ name, description, urls, onClick, reverse }) => {
  const isLargeScreen = useMediaQuery(LargeScreen);
  return (
    <div
      className={
        reverse && isLargeScreen ? style.container_reverse : style.container
      }
    >
      <picture>
        <source srcSet={urls.desktop} media="(min-width:1024px)" />
        <source srcSet={urls.tablet} media="(min-width:768px)" />
        <img src={urls.mobile} alt="New Product" className={style.image} />
      </picture>
      <Marginer direction="horizontal" margin={2} />
      <div className={style.content}>
        <h2 className={style.title}>{name}</h2>
        <Marginer direction="horizontal" margin={2} />
        <p className={style.text}>{description}</p>
        <Marginer direction="horizontal" margin={2} />
        <Button variant="primary" onClick={onClick}>
          SEE PRODUCT
        </Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  urls: PropTypes.arrayOf(String).isRequired,
  onClick: PropTypes.func.isRequired,
  reverse: PropTypes.bool.isRequired,
};

export default ProductCard;
