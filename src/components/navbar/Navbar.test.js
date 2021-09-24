import React from 'react';
import ShallowRender from 'react-test-renderer/shallow';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Navbar from './Navbar';

jest.mock('react-responsive', () => {
  const originalModule = jest.requireActual('react-responsive');
  return {
    __esModule: true,
    ...originalModule,
    useMediaQuery: jest.fn(),
  };
});

describe('Navbar', () => {
  beforeEach(() => {
    useMediaQuery.mockClear();
  });

  afterAll(() => {
    useMediaQuery.mockRestore();
  });

  it('should render logo, navlinks and cart button when vw is large or more', () => {
    useMediaQuery.mockReturnValueOnce(false).mockReturnValueOnce(true);
    const renderer = new ShallowRender();
    renderer.render(<Navbar />);

    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('should render menu button, logo and cart button when vw is medium or less', () => {
    useMediaQuery.mockReturnValueOnce(true).mockReturnValueOnce(false);
    const renderer = new ShallowRender();
    renderer.render(<Navbar />);

    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('should open / close navigation menu when the user clicks the menu btn', () => {
    useMediaQuery.mockReturnValueOnce(true).mockReturnValueOnce(false);

    let menuBtn;
    let navMenuContainer;

    const wrapper = mount(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    useMediaQuery.mockReturnValueOnce(true).mockReturnValueOnce(false);
    menuBtn = wrapper.find('[data-testid="menu-btn"]');
    menuBtn.simulate('click');
    navMenuContainer = wrapper.find('[data-testid="navlinks-container"]');
    expect(navMenuContainer.hasClass('display')).toBe(true);

    useMediaQuery.mockReturnValueOnce(true).mockReturnValueOnce(false);
    menuBtn = wrapper.find('[data-testid="menu-btn"]');
    menuBtn.simulate('click');
    navMenuContainer = wrapper.find('[data-testid="navlinks-container"]');

    expect(navMenuContainer.hasClass('hide')).toBe(true);
  });
});
