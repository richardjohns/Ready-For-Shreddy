import data from '../../data.json'

export const SHOW_ERROR = 'SHOW_ERROR'
export const SEARCH_SKIRESORTS = 'SEARCH_SKIRESORTS'
export const RECEIVE_SKIRESORTS = 'RECEIVE_SKIRESORTS'

export const requestSkiResorts = () => {
  return {
    type: RECEIVE_SKIRESORTS
  }
}

export const searchSkiResorts = (searchTerm) => {
  return {
    type: SEARCH_SKIRESORTS,
    searchTerm
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage
  }
}

export function fetchSkiResorts (searchTerm) {
  return (dispatch) => {
    dispatch(requestSkiResorts())
    dispatch(searchSkiResorts(searchTerm.toLowerCase()))
  }
}