import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import TabMenu from '../js/components/main/body/TabMenu.jsx';

describe('TabMenu component', () => {
  it('renders without exploding', () => {
    expect(
      shallow(<TabMenu />).length).toEqual(1)
  })
  // it('Body has class bodymain', () => {
  //   const body = shallow(<Body />);
  //   expect(body.find('.bodymain').length).toEqual(1);
  // })
})

test('Check snapshot', () => {
  const wrapper = shallow(<TabMenu />);
  expect(wrapper).toMatchSnapshot();
});
