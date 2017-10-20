
import { combineReducers } from 'redux'

import searchBar from './searchBar'
import weather from './weather'
import skiResorts from './skiResorts'

export default combineReducers({
  skiResorts,
  searchBar,
  weather
})
