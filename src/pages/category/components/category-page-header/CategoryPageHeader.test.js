import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import CategoryPageHeader from './CategoryPageHeader';

describe('CategoryPageHeader', () => {
  it('should renders correctly', () => {
    const tree = create(<CategoryPageHeader category="some-category" />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should pass category prop correctly', () => {
    const wrapper = shallow(<CategoryPageHeader category="some-category" />);
    expect(wrapper.find('h2').text()).toBe('some-category');
  });
});
