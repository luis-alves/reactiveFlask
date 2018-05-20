import axios from "axios"


/* Remove all checkboxes ticks and enable only the one selected */
export function updateCheckbox(id) {
  return function (dispatch) {
    dispatch({type: "UPDATE_ALL_CHECKBOX_FETCHING"})

    axios.post(window.location.href + 'untick', {
      id: id
    })
    .then(response => {
      dispatch({
        type: "UPDATE_ALL_CHECKBOX_FULFILLED",
        payload: response.data.checkbox,
        id: response.data.id})
    })
    .catch(err => {
      dispatch({
        type: "UPDATE_ALL_CHECKBOX_REJECTED",
        payload: err})
    })
  }
}
