import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Home from './Home';

describe('Home', () => {
  it('should renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Home />);

    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
