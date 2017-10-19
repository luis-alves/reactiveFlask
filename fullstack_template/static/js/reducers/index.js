import { combineReducers } from "redux"

import clearedBalance from "./clearedBalanceReducer"
import unclearedBalance from "./unclearedBalanceReducer"
import workingBalance from "./workingBalanceReducer"


export default combineReducers({
  clearedBalance,
  unclearedBalance,
  workingBalance,
})
