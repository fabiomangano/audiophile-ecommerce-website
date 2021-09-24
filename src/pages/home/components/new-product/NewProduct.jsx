import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Marginer from '../../../../components/marginer/Marginer';
import Button from '../../../../components/button/Button';
import endpoints from '../../../../config/endpoint.json';
import style from './NewProduct.module.scss';

const NewProduct = ({ newProduct, fetchNewProduct }) => {
  useEffect(() => {
    fetchNewProduct(endpoints['new-product']);
  }, []);

  if (!newProduct) {
    return <div className={style.container} />;
  }

  const { id, categoryName } = newProduct;
  const history = useHistory();
  const onClick = () => history.push(`/category/${categoryName}/product/${id}`);

  return (
    <div className={style.container}>
      <div className={style.background}>
        <div className={style.content}>
          <h6 className={style.overline}>NEW PRODUCT</h6>
          <Marginer direction="horizontal" margin={1.5} />
          <h1>{newProduct.name}</h1>
          <Marginer direction="horizontal" margin={1.5} />
          <p>{newProduct.description}</p>
          <Marginer direction="horizontal" margin={1.5} />
          <Button onClick={onClick}>SEE PRODUCT</Button>
        </div>
      </div>
    </div>
  );
};

NewProduct.propTypes = {
  newProduct: PropTypes.shape({
    id: PropTypes.string,
    categoryName: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  fetchNewProduct: PropTypes.func.isRequired,
};

export default NewProduct;
