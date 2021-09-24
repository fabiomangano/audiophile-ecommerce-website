import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-grid-system';
import PageLayout from '../../layouts/PageLayout';
import CategoryPageHeader from './components/category-page-header/CategoryPageHeader';
import ProductCardList from './containers/product-card-list/ProductCardList';
import Marginer from '../../components/marginer/Marginer';
import CategoryCardGroup from '../../components/category-card-group/CategoryCardGroup';
import About from '../../components/about/About';

const Category = () => {
  const { categoryName } = useParams();

  return (
    <PageLayout hero={<CategoryPageHeader category={categoryName} />}>
      <Container>
        <Marginer direction="horizontal" margin={7.5} />
        <ProductCardList />
        <Marginer direction="horizontal" margin={12} />
        <CategoryCardGroup />
        <Marginer direction="horizontal" margin={7.5} />
        <About />
        <Marginer direction="horizontal" margin={10} />
      </Container>
    </PageLayout>
  );
};

export default Category;
