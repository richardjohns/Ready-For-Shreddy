import { combineReducers } from 'redux'

import searchBar from './searchBar'
import weather from './weather'

export default combineReducers({
  searchBar,
  weather
})
