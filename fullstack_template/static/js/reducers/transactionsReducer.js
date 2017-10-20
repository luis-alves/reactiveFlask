export default function reducer(state={
  transactions: null,
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case "FETCH_TRANSACTIONS_FETCHING":
      return {...state, fetching: true}
    case "FETCH_TRANSACTIONS_REJECTED":
      return {...state, fetching: false, error: action.payload}
    case "FETCH_TRANSACTIONS_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        transactions: action.payload
      }
    default:
      return {
        ...state,
      }
  }
}
