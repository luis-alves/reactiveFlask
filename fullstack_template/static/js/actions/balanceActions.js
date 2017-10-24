
import axios from "axios"

export function fetchBalance() {
  return function (dispatch) {
    dispatch({type: "FETCH_BALANCE_FETCHING"})
    axios.get(window.location.href + 'balance')
    .then(response => {
      console.log(response.data);
      dispatch({type: "FETCH_BALANCE_FULFILLED", payload: response.data})
    })
    .catch(err => {
      dispatch({type: "FETCH_BALANCE_REJECTED", payload: err})
    })
  }
}
