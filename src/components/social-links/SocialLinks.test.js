import React from 'react';
import { mount } from 'enzyme';
import ShallowRender from 'react-test-renderer/shallow';
import SocialLinks from './SocialLinks';
import icons from '../icon/icons';

describe('SocialLinks', () => {
  it('should renders correctly', () => {
    const renderer = new ShallowRender();
    renderer.render(<SocialLinks />);

    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('should output three svgs: Facebook, Twitter, Instgram', () => {
    const wrapper = mount(<SocialLinks />);
    expect(wrapper.find('svg').length).toEqual(3);
    expect(wrapper.find('path').at(0).props()).toHaveProperty(
      'd',
      icons.FACEBOOK,
    );
    expect(wrapper.find('path').at(1).props()).toHaveProperty(
      'd',
      icons.TWITTER,
    );
    expect(wrapper.find('path').at(2).props()).toHaveProperty(
      'd',
      icons.INSTAGRAM,
    );
  });
});
