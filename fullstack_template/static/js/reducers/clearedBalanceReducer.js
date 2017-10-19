export default function reducer(state={
  cleared: null,
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case "FETCH_CLEARED_BALANCE":
      return {...state, fetching: true}
    case "FETCH_CLEARED_REJECTED":
      return {...state, fetching: false, error: action.payload}
    case "FETCH_CLEARED_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        cleared: action.payload
      }
    default:
      return {
        ...state,
      }
  }
}
