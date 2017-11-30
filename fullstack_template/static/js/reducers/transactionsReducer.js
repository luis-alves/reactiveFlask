export default function reducer(state={
  transactions: null,
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    // Fetch all data
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
    // Reconciled account
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
    // Inputed data from field elements
    case "INPUT_TRANSACTIONS_FETCHING":
      return {...state, fetching: true}
    case "INPUT_TRANSACTIONS_REJECTED":
      return {...state, fetching: false, error: action.payload}
    case "INPUT_TRANSACTIONS_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        transactions: state.transactions.map(row => row._id['$oid'] === action.id ?
          {
            ...row,
            payee: action.payload.payee,
            category: action.payload.category,
            memo: action.payload.memo,
            date: action.payload.date, 
            category: action.payload.category,
            outflow: action.payload.outflow,
            inflow: action.payload.inflow
          } : row
        )
      }



    default:
      return {
        ...state,
      }
  }
}
