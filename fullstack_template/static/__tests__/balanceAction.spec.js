import React from 'react'
import expect from 'expect'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import { fetchBalance } from '../js/actions/balanceActions'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('check actions', () => {
  it('should have a type of CHANGE_LOCATION', function() {
    const store = mockStore({type: 'FETCH_BALANCE_FULFILLED', balance: 30})
    store.dispatch({type: 'FETCH_BALANCE_FULFILLED', balance: 30})
    console.log(store.getState())
    // return store.dispatch(fetchBalance())
    expect(store.dispatch(fetchBalance()).toMatchSnapshot())
    // return store.dispatch(fetchBalance()).then(() => {
      // expect(store.getActions()).toMatchSnapshot()
    // })
  });
})
