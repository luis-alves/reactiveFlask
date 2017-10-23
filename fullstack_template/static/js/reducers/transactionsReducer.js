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
      case "UPDATE_TRANSACTIONS_FETCHING":
        return {...state, fetching: true}
      case "UPDATE_TRANSACTIONS_REJECTED":
        return {...state, fetching: false, error: action.payload}
      case "UPDATE_TRANSACTIONS_FULFILLED":
        return {
          ...state,
          fetching: false,
          fetched: true,
          transactions: state.transactions.map(row => row._id['$oid'] === action.id ?
            {...row, reconcile: action.payload} : row
          )
        }

    default:
      return {
        ...state,
      }
  }
}
