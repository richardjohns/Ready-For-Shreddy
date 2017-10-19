import { combineReducers } from 'redux'

import searchBar from './searchBar'
import skiResorts from './skiResorts'

export default combineReducers({
  skiResorts,
  searchBar
})
