import React from 'react';
import { Container } from 'react-grid-system';
import CategoryCardGroup from '../../components/category-card-group/CategoryCardGroup';
import Marginer from '../../components/marginer/Marginer';
import PageLayout from '../../layouts/PageLayout';
import NewProduct from './containers/NewProduct';
import FeaturedProducts from './containers/FeaturedProducts';
import About from '../../components/about/About';

const Home = () => {
  return (
    <PageLayout hero={<NewProduct />}>
      <Container>
        <Marginer direction="horizontal" margin={7.5} />
        <CategoryCardGroup />
        <Marginer direction="horizontal" margin={7.5} />
        <FeaturedProducts />
        <Marginer direction="horizontal" margin={7.5} />
        <About />
        <Marginer direction="horizontal" margin={10} />
      </Container>
    </PageLayout>
  );
};

export default Home;
