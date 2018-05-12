import React from 'react';
import expect from 'expect';
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme';
import ConnectedBalance, { Balance } from '../js/components/main/body/headers/account/Balance.jsx';
import { fetchBalance } from '../js/actions/balanceActions'

describe('Balance component', () => {
  it('renders without exploding', () => {
    expect(
      shallow(<Balance />).length).toEqual(1)
  })
})

test('Balance component snapshot', () => {
  const wrapper = shallow(<Balance />);
  expect(wrapper).toMatchSnapshot();
});

describe('Balance connect component', () => {
  const initialState = {balance:10}
  const mockStore = configureStore()
  let store, container

  beforeEach(() => {
    store = mockStore(initialState)
    container = shallow(<ConnectedBalance store={store} />)
  })

  it('renders without exploding', () => {
    expect(container.length).toEqual(1)
  })

  it('check Prop matches with initialState', () => {
    // console.log(container.props().store.getState().balance)
    expect(container.instance().props.store.getState().balance).toEqual(initialState.balance)
  })
})
