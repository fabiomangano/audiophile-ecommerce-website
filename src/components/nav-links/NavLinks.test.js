import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import NavLinks, { links } from './NavLinks';

describe('Navlinks', () => {
  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<NavLinks />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('should render all page links', () => {
    const wrapper = mount(
      <MemoryRouter>
        <NavLinks />
      </MemoryRouter>,
    );

    links.forEach(({ to, label }, position) => {
      expect(wrapper.find('a').at(position).children().text()).toEqual(label);
      expect(wrapper.find('a').at(position).props()).toHaveProperty('href', to);
    });
  });
});
