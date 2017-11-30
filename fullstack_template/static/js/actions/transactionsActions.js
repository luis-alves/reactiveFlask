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
/* Update reconcile data */
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
    dispatch({type: "FETCH_BALANCE_FETCHING"})
    axios.get(window.location.href + 'balance')
    .then(response => {
      dispatch({type: "FETCH_BALANCE_FULFILLED", payload: response.data})
    })
    .catch(err => {
      dispatch({type: "FETCH_BALANCE_REJECTED", payload: err})
    })
  }
}
/* Update database of the color of the bookmarks */
export function updateTransactionsBookmark(color, id) {
  return function (dispatch) {
    dispatch({type: "UPDATE_TRANSACTIONS_FETCHING"})

    axios.post(window.location.href + 'bookmark', {
      color: color,
      id: id
      // elementsId: e.target.parentElement.parentElement.id,
      // elementsId: e.target.parentElement.parentElement.id,
    }
    ).then(response => {
      dispatch({
        type: "UPDATE_TRANSACTIONS_FULFILLED",
        payload: response.data.bookmark,
        id: response.data.id})
    })
    .catch(err => {
      dispatch({
        type: "UPDATE_TRANSACTIONS_REJECTED",
        payload: err})
    })
    // Fetch updated transactions
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

/* Update database with the data from input fields */
export function updateTransactionsInputData(data) {
  console.log(data.memo);
  return function (dispatch) {
    dispatch({type: "INPUT_TRANSACTIONS_FETCHING"})

    axios.post(window.location.href + 'input', {
      payee: data.payee,
      date: data.startDate._i,
      category: data.category,
      memo: data.memo,
      outflow: data.outflow,
      inflow: data.inflow,
      id: data.id
      // elementsId: e.target.parentElement.parentElement.id,
      // elementsId: e.target.parentElement.parentElement.id,
    }
    ).then(response => {
      console.log('response ' + response);
      dispatch({
        type: "INPUT_TRANSACTIONS_FULFILLED",
        payload: response.data,
        id: response.data.id})
    })
    .catch(err => {
      dispatch({
        type: "INPUT_TRANSACTIONS_REJECTED",
        payload: err})
    })
    // Fetch updated transactions
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
