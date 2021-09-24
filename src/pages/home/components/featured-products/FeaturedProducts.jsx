import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { MediumOrLargeScreen } from '../../../../mediaQueries';
import Marginer from '../../../../components/marginer/Marginer';
import Button from '../../../../components/button/Button';
import endpoints from '../../../../config/endpoint.json';
import style from './FeaturedProducts.module.scss';

const FeaturedProducts = ({ featuredProducts, fetchFeaturedProducts }) => {
  const isMediumOrLargeScreen = useMediaQuery(MediumOrLargeScreen);

  useEffect(() => {
    fetchFeaturedProducts(endpoints['featured-products']);
  }, []);

  if (!featuredProducts) {
    return (
      <>
        <div className={style.main} />
        <Marginer direction="horizontal" margin={2.2} />
        <div className={style.flat} />
        <Marginer direction="horizontal" margin={2.2} />
        <div className={style.splitted}>
          <div className={style.splitted_top} />
          <div className={style.splitted_bottom} />
        </div>
      </>
    );
  }

  return (
    <>
      <div className={style.main}>
        <Marginer direction="horizontal" margin={3.5} />
        <img
          src={featuredProducts[0].url}
          alt="Product"
          className={style.main_image}
        />
        <Marginer direction="horizontal" margin={3.5} />
        <div className={style.main_content}>
          <h1>{featuredProducts[0].name}</h1>
          <Marginer direction="horizontal" margin={3.5} />
          <p>{featuredProducts[0].description}</p>
          <Marginer direction="horizontal" margin={3.5} />
          <Button variant="secondary">SEE PRODUCT</Button>
        </div>
      </div>
      <Marginer direction="horizontal" margin={2.2} />
      <div className={style.flat}>
        <div className={style.flat_content}>
          <h3>{featuredProducts[1].name}</h3>
          <Marginer direction="horizontal" margin={2} />
          <Button variant="outline">SEE PRODUCT</Button>
        </div>
      </div>
      <Marginer direction="horizontal" margin={2.2} />
      <div className={style.splitted}>
        <div className={style.splitted_top} />
        <Marginer
          direction={isMediumOrLargeScreen ? 'vertical' : 'horizontal'}
          margin={1.5}
        />
        <div className={style.splitted_bottom}>
          <h3>{featuredProducts[1].name}</h3>
          <Marginer direction="horizontal" margin={1.5} />
          <Button variant="outline">SEE PRODUCT</Button>
        </div>
      </div>
    </>
  );
};

FeaturedProducts.propTypes = {
  featuredProducts: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape({
        id: PropTypes.String,
        url: PropTypes.String,
        name: PropTypes.String,
        description: PropTypes.String,
      }),
    ),
  ).isRequired,
  fetchFeaturedProducts: PropTypes.func.isRequired,
};

export default FeaturedProducts;
