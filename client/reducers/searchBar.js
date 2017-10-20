import { RECEIVE_SKIRESORTS, SEARCH_SKIRESORTS } from '../actions'

function searchReducer (searchTerm = '', action) {
  switch (action.type) {
    case SEARCH_SKIRESORTS:
      return action.searchTerm
    default:
      return searchTerm
  }
}

export default searchReducer
