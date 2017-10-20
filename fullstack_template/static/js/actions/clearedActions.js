
import axios from "axios"

export function fetchClearedBalance() {
  return function (dispatch) {
    dispatch({type: "FETCH_CLEARED_FETCHING"})
    axios.get(window.location.href + 'cleared_balance')
    .then(response => {
      dispatch({type: "FETCH_CLEARED_FULFILLED", payload: response.data})
    })
    .catch(err => {
      dispatch({type: "FETCH_CLEARED_REJECTED", payload: err})
    })
  }
}
