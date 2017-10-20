import request from 'superagent'

export function getResorts () {
  return request.get('/api/v1/resorts')
    .then(result => {
      console.log(result)
      const resorts = result.body
      return resorts
    })
}
