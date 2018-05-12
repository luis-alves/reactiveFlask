import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Header from '../js/components/main/body/headers/Header.jsx';

describe('Header component', () => {
  it('renders without exploding', () => {
    expect(
      shallow(<Header />).length).toEqual(1)
  })
  // it('Header has class page-header', () => {
  //   const component = shallow(<Header />);
  //   expect(component.find('.page-header').length).toEqual(1);
  // })
})

test('Check snapshot', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
