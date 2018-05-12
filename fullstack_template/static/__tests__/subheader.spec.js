import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Subheader from '../js/components/main/body/headers/Subheader.jsx';

describe('Subheader component', () => {
  it('renders without exploding', () => {
    expect(
      shallow(<Subheader />).length).toEqual(1)
  })
  // it('Header has class page-header', () => {
  //   const component = shallow(<Header />);
  //   expect(component.find('.page-header').length).toEqual(1);
  // })
})

test('Check snapshot', () => {
  const wrapper = shallow(<Subheader />);
  expect(wrapper).toMatchSnapshot();
});
