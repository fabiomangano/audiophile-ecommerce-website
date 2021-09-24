import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-grid-system';
import PageLayout from '../../layouts/PageLayout';
import Button from '../../components/button/Button';
import About from '../../components/about/About';
import Marginer from '../../components/marginer/Marginer';
import style from './Product.module.scss';

const Product = ({ name, description, url }) => {
  const history = useHistory();
  const goBack = () => history.push('/');

  return (
    <PageLayout>
      <Container>
        <div className={style.container}>
          <Marginer direction="horizontal" margin={1} />
          <Button variant="link" onClick={goBack}>
            Go back
          </Button>
          <img className={style.image} src={url} alt="Product" />
          <Marginer direction="horizontal" margin={2} />
          <h2 style={{ textAlign: 'center' }}>{name}</h2>
          <Marginer direction="horizontal" margin={2} />
          <p style={{ textAlign: 'center' }}>{description}</p>
          <Marginer direction="horizontal" margin={2} />
          <Button variant="primary" onClick={() => {}}>
            SEE PRODUCT
          </Button>
          <Marginer direction="horizontal" margin={7.5} />
          <About />
          <Marginer direction="horizontal" margin={10} />
        </div>
      </Container>
    </PageLayout>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
