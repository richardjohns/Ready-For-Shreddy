import { getResorts } from '../client-api'

export const SHOW_ERROR = 'SHOW_ERROR'
export const SEARCH_SKIRESORTS = 'SEARCH_SKIRESORTS'
export const REQUEST_SKIRESORTS = 'REQUEST_SKIRESORTS'
export const RECEIVE_SKIRESORTS = 'RECEIVE_SKIRESORTS'

export const requestSkiResorts = () => {
  return {
    type: REQUEST_SKIRESORTS
  }
}

export const searchSkiResorts = (searchTerm) => {
  return {
    type: SEARCH_SKIRESORTS,
    searchTerm
  }
}

export const receiveSkiResorts = (resorts) => {
  return {
    type: RECEIVE_SKIRESORTS,
    resorts: resorts
  }
}

// export const showError = (errorMessage) => {
//   return {
//     type: SHOW_ERROR,
//     errorMessage
//   }
// }

export function fetchSkiResorts (searchTerm) {
  return (dispatch) => {
    getResorts()
      .then(resorts => {
        dispatch(receiveSkiResorts(resorts))
      })
      .catch(err => {
        throw new Error(err.message)
      })
    dispatch(searchSkiResorts(searchTerm.toLowerCase()))
  }
}
