import { RECEIVE_SKIRESORTS, SEARCH_SKIRESORTS, REQUEST_SKIRESORTS } from '../actions'
const intitialskiResorts = []

export default function skiResorts (state = {search: [], resorts: []}, action) {
  switch (action.type) {
    case RECEIVE_SKIRESORTS:
      return {
        search: [],
        resorts: action.resorts
      }
    case SEARCH_SKIRESORTS:
      if (action.searchTerm.length == 0) return {
        search: [],
        resorts: state.resorts
      }
      return {
        resorts: [...state.resorts],
        search: [...state.resorts].filter(resort => resort.ski_resort.toLowerCase().includes(action.searchTerm) || resort.area.toLowerCase().includes(action.searchTerm))
      }
    default:
      return state
  }
}
