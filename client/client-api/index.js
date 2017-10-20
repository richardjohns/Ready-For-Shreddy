import request from 'superagent'
//================================================
export function getAccoms() {
  return request.get('/api/v1/accoms/accoms')
    .then(result => {
      const accoms = result.body
      return accoms
    })
    .catch(err => {
      throw Error('Cannot GET Accoms')
    })
}
