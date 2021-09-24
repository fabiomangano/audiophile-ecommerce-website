import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import Marginer from './Marginer';

describe('Marginer', () => {
  it('should render a vertical marginer', () => {
    const tree = create(<Marginer direction="vertical" margin={1} />);
    expect(tree.toJSON()).toMatchSnapshot({
      props: { style: { display: 'flex', width: expect.any(String) } },
    });
  });

  it('should render an horizontal marginer', () => {
    const tree = create(<Marginer direction="horizontal" margin={1} />);
    expect(tree.toJSON()).toMatchSnapshot({
      props: { style: { display: 'flex', height: expect.any(String) } },
    });
  });

  it('should render a horizontal marginer if no direction is provided, with the given margin', () => {
    const wrapper = shallow(<Marginer margin={1} />);
    expect(wrapper.find('span').props('style')).toEqual({
      style: { display: 'flex', height: '1rem' },
    });
  });

  it('should render a horizontal marginer with the given margin', () => {
    const wrapper = shallow(<Marginer direction="horizontal" margin={1} />);
    expect(wrapper.find('span').props('style')).toEqual({
      style: { display: 'flex', height: '1rem' },
    });
  });

  it('should render a vertical marginer with the given margin', () => {
    const wrapper = shallow(<Marginer direction="vertical" margin={1} />);
    expect(wrapper.find('span').props('style')).toEqual({
      style: { display: 'flex', width: '1rem' },
    });
  });
});
