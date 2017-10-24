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

export function updateTransactions(e) {
  return function (dispatch) {
    dispatch({type: "UPDATE_TRANSACTIONS_FETCHING"})

    axios.post(window.location.href + 'reconcileflag', {
      elementsId: e.target.parentElement.parentElement.id,
      // elementsId: e.target.parentElement.parentElement.id,
    }
  ).then(response => {
      dispatch({
        type: "UPDATE_TRANSACTIONS_FULFILLED",
        payload: response.data.reconcile,
        id: response.data.id})
    })
    .catch(err => {
      dispatch({
        type: "UPDATE_TRANSACTIONS_REJECTED",
        payload: err})
    })
    // Totals
    // Fetching cleared balance
    dispatch({type: "FETCH_BALAMCE_FETCHING"})
    axios.get(window.location.href + 'balance')
    .then(response => {
      dispatch({type: "FETCH_BALANCE_FULFILLED", payload: response.data})
    })
    .catch(err => {
      dispatch({type: "FETCH_BALANCE_REJECTED", payload: err})
    })
  }
}
