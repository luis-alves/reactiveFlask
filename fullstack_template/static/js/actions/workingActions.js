import axios from "axios"


export function fetchWorkingBalance() {
  return function (dispatch) {
    dispatch({type: "FETCH_WORKING_FETCHING"})
    axios.get(window.location.href + 'working_balance')
    .then(response => {
      dispatch({type: "FETCH_WORKING_FULFILLED", payload: response.data})
    })
    .catch(err => {
      dispach({type: "FETCH_WORKING_REJECTED", payload: err})
    })
  }
}
