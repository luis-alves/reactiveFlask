export default function reducer(state={
  cleared: null,
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case "FETCH_BALANCE_FETCHING":
      return {...state, fetching: true}
    case "FETCH_BALANCE_REJECTED":
      return {...state, fetching: false, error: action.payload}
    case "FETCH_BALANCE_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        balance: action.payload
      }
    default:
      return {
        ...state,
      }
  }
}
