import axios from "axios"


export function fetchTransactions() {
  return function (dispatch) {
    dispatch({type: "FETCH_TRANSACTIONS_FETCHING"})
    axios.get(window.location.href + 'transactions')
    .then(response => {
      dispatch({type: "FETCH_TRANSACTIONS_FULFILLED", payload: response.data})
    })
    .catch(err => {
      dispatch({type: "FETCH_TRANSACTIONS_REJECTED", payload: err})
    })
  }
}
