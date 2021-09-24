import React from 'react';
import { create } from 'react-test-renderer';
import ProductCard from './ProductCard';

describe('ProductCard', () => {
  let tree;
  let onClick;

  beforeEach(() => {
    onClick = jest.fn();

    tree = create(
      <ProductCard
        name="product"
        description="some-description"
        url="some-image-url"
        onClick={onClick}
      />,
    );
  });

  it('should render correctly and display name, description, imageUrl of the given product', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should call onClick when user click on the page', () => {
    const instance = tree.root;
    const button = instance.findByType('button');
    button.props.onClick();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
