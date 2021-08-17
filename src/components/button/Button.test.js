import React from 'react';
import { create } from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('should renders correctly', () => {
    const tree = create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should output a button', () => {
    const wrapper = mount(<Button>Title</Button>);
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should set correctly the type when provided', () => {
    const wrapper = mount(<Button type="submit">Title</Button>);
    expect(wrapper.getDOMNode().getAttribute('type')).toEqual('submit');
  });

  it('should call onClick function when the user click', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button onClick={onClick}>Title</Button>);
    wrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Should default to variant="primary and size="md"', () => {
    const wrapper = mount(<Button>Title</Button>);
    expect(wrapper.find('button').hasClass('primary')).toEqual(true);
    expect(wrapper.find('button').hasClass('md')).toEqual(true);
  });

  it('Should apply variant class', () => {
    const wrapper = mount(<Button variant="outline">Title</Button>);
    expect(wrapper.find('button').hasClass('outline')).toEqual(true);
  });
});
