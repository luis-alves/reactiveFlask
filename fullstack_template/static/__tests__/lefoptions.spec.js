import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import LeftOptions from '../js/components/main/body/headers/subheader/LeftOptions.jsx';

describe('LeftOptions component', () => {
  it('renders without exploding', () => {
    expect(
      shallow(<LeftOptions />).length).toEqual(1)
  })
  // it('Header has class page-header', () => {
  //   const component = shallow(<Header />);
  //   expect(component.find('.page-header').length).toEqual(1);
  // })
})

test('Check snapshot', () => {
  const wrapper = shallow(<LeftOptions />);
  expect(wrapper).toMatchSnapshot();
});
