export default function reducer(state={
  working: null,
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case "FETCH_WORKING_FETCHING":
      return {...state, fetching: true}
    case "FETCH_WORKING_REJECTED":
      return {...state, fetching: false, error: action.payload}
    case "FETCH_WORKING_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        working: action.payload
      }
    default:
      return {
        ...state,
      }
  }
}
