import { combineReducers } from "redux"

import transactions from "./transactionsReducer"
import balance from "./balanceReducer"


export default combineReducers({
  transactions,
  balance,
})
