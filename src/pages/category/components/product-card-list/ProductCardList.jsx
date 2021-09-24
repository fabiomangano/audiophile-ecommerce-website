import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import ProductCard from '../product-card/ProductCard';
import endpoints from '../../../../config/endpoint.json';
import style from './ProductCardList.module.scss';

const ProductCardList = ({ fetchProductCardList, productList }) => {
  const { categoryName } = useParams();
  const url = `${endpoints.category}?${categoryName}`;

  useEffect(() => {
    fetchProductCardList(url);
  }, [url]);

  if (!productList || !productList[categoryName]) {
    return <div className={style.loading} />;
  }

  return (
    <div className={style.container}>
      {productList[categoryName].map(({ name, urls, description }, index) => (
        <ProductCard
          name={name}
          description={description}
          urls={urls}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

ProductCardList.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape({
        name: PropTypes.string,
        urls: PropTypes.arrayOf(
          PropTypes.objectOf(
            PropTypes.shape({
              mobile: PropTypes.string,
              tablet: PropTypes.string,
              desktop: PropTypes.string,
            }),
          ),
        ),
        description: PropTypes.string,
      }),
    ),
  ).isRequired,
  fetchProductCardList: PropTypes.func.isRequired,
};

export default ProductCardList;
