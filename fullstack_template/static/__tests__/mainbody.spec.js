import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Body from '../js/components/main/body/Body.jsx';
//import { describe, it } from 'jest';

describe('Body component', () => {
  it('renders without exploding', () => {
    expect(
      shallow(<Body />).length).toEqual(1)
  })
  it('Body has class bodymain', () => {
    const body = shallow(<Body />);
    expect(body.find('.bodymain').length).toEqual(1);
  })
})

test('Check snapshot', () => {
  const wrapper = shallow(<Body />);
  expect(wrapper).toMatchSnapshot();
});
