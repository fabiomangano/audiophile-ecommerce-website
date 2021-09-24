import React from 'react';
import { mount } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import IconButton from './IconButton';
import Icon from '../icon/Icon';

jest.mock('../icon/Icon', () => () => <svg />);

describe('IconButton', () => {
  it('should renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<IconButton />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });

  it('should render the given icon', () => {
    const wrapper = mount(
      <IconButton>
        <Icon />
      </IconButton>,
    );

    expect(wrapper.find('svg').length).toEqual(1);
  });

  it('should call onClick function', () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <IconButton onClick={onClick}>
        <Icon />
      </IconButton>,
    );

    wrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
