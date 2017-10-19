
import axios from "axios"

export function fetchUnclearedBalance() {
  return function (dispatch) {
    dispatch({type: "FETCH_UNCLEARED_FETCHING"})
    axios.get(window.location.href + 'uncleared_balance')
    .then(response => {
      dispatch({type: "FETCH_UNCLEARED_FULFILLED", payload: response.data})
    })
    .catch(err => {
      dispach({type: "FETCH_UNCLEARED_REJECTED", payload: err})
    })
  }
}
