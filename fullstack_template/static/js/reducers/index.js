import { combineReducers } from "redux"

import clearedBalance from "./clearedBalanceReducer"
import unclearedBalance from "./unclearedBalanceReducer"
import workingBalance from "./workingBalanceReducer"
import transactions from "./transactionsReducer"


export default combineReducers({
  clearedBalance,
  unclearedBalance,
  workingBalance,
  transactions,
})
