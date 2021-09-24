import React from 'react';
import { create } from 'react-test-renderer';
import FeaturedProducts from './FeaturedProducts';

describe('FeauturedProducts', () => {
  it('should renders correctly', () => {
    const tree = create(<FeaturedProducts />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
