import { RECEIVE_SKIRESORTS, SEARCH_SKIRESORTS } from '../actions'
import data from '../../data.json'
const intitialskiResorts = data.skiResorts
console.log(intitialskiResorts)

export default function skiResorts (resorts = intitialskiResorts, action) {
  switch(action.type) {
    case SEARCH_SKIRESORTS:
      return [...data.skiResorts].filter(skiResort => skiResort.skiResort.toLowerCase().includes(action.searchTerm) || skiResort.area.toLowerCase().includes(action.searchTerm))
    default:
      return resorts
  }
}