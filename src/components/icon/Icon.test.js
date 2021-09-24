import React from 'react';
import { create } from 'react-test-renderer';
import Icon from './Icon';

describe('Icon', () => {
  it('should renders corretly', () => {
    const tree = create(<Icon path="some/path/to/svg" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
