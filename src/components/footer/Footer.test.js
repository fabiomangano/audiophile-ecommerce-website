import React from 'react';
import ShallowRender from 'react-test-renderer/shallow';
import { useMediaQuery } from 'react-responsive';
import Footer from './Footer';

jest.mock('react-responsive', () => {
  const originalModule = jest.requireActual('react-responsive');
  return {
    __esModule: true,
    ...originalModule,
    useMediaQuery: jest.fn(),
  };
});

describe('Footer', () => {
  beforeEach(() => {
    useMediaQuery.mockClear();
  });

  afterAll(() => {
    useMediaQuery.mockRestore();
  });

  it('should render correctly when vw is large or more', () => {
    useMediaQuery.mockReturnValueOnce(false).mockReturnValueOnce(true);
    const renderer = new ShallowRender();
    renderer.render(<Footer />);

    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('should render correctly when vw is medium more', () => {
    useMediaQuery.mockReturnValueOnce(true).mockReturnValueOnce(false);
    const renderer = new ShallowRender();
    renderer.render(<Footer />);

    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('should render correctly when vw is small or less', () => {
    useMediaQuery.mockReturnValueOnce(false).mockReturnValueOnce(false);
    const renderer = new ShallowRender();
    renderer.render(<Footer />);

    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
