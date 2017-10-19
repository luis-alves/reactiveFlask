export default function reducer(state={
  uncleared: null,
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case "FETCH_UNCLEARED_FETCHING":
      return {...state, fetching: true}
    case "FETCH_UNCLEARED_REJECTED":
      return {...state, fetching: false, error: action.payload}
    case "FETCH_UNCLEARED_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        uncleared: action.payload
      }
    default:
      return {
        ...state,
      }
  }
}
