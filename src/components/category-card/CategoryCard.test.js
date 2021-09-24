import React from 'react';
import { create } from 'react-test-renderer';
import CategoryCard from './CategoryCard';

describe('CategoryCard', () => {
  it('should correctly render', () => {
    const tree = create(
      <CategoryCard
        category="some-category"
        url="some-url"
        onClick={jest.fn()}
      />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
