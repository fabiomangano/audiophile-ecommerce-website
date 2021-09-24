import React from 'react';
import { create } from 'react-test-renderer';
import { Context as ResponsiveContext } from 'react-responsive';
import About from './About';

describe('About', () => {
  it('should render correctly when vw is small or less', () => {
    const tree = create(
      <ResponsiveContext.Provider value={{ width: 480 }}>
        <About />
      </ResponsiveContext.Provider>,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render correctly when vw is medium or greater', () => {
    const tree = create(
      <ResponsiveContext.Provider value={{ width: 769 }}>
        <About />
      </ResponsiveContext.Provider>,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render correctly when vw is large', () => {
    const tree = create(
      <ResponsiveContext.Provider value={{ width: 1024 }}>
        <About />
      </ResponsiveContext.Provider>,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
