import { RECEIVE_SKIRESORTS, SEARCH_SKIRESORTS } from '../actions'
import data from '../../data.json'
const intitialskiResorts = data.skiResorts

function skiResorts (skiResorts = intitialskiResorts, action) {
  switch (action.type) {
    case RECEIVE_SKIRESORTS:
      return action.skiResorts
    case SEARCH_SKIRESORTS:
      return [...data.skiResorts].filter(skiResort => skiResort.SkiResort.toLowerCase().includes(action.searchTerm) || skiResort.area.toLowerCase().includes(action.searchTerm))
    default:
      return skiResorts
  }
}

export default skiResorts
