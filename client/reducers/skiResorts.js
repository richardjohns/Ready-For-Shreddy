import { RECEIVE_SKIRESORTS, SEARCH_SKIRESORTS, REQUEST_SKIRESORTS } from '../actions'
const intitialskiResorts = []

export default function skiResorts (resorts = intitialskiResorts, action) {
  switch (action.type) {
    case RECEIVE_SKIRESORTS:
      return action.resorts
    case SEARCH_SKIRESORTS:
      return [...resorts].filter(skiResort => skiResort.skiResort.toLowerCase().includes(action.searchTerm) || skiResort.area.toLowerCase().includes(action.searchTerm))
    default:
      return resorts
  }
}
