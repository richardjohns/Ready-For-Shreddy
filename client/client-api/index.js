import request from 'superagent'

export function getResortReport (skiField, callback) {
  request
    // .get('/api/v1/snowreport/' + skiField)
    .get(`http://localhost:3000/api/v1/snowreport/${skiField}`)
    .end((err, res) => {
      if (err) {
        callback(err)
        console.log(err)
      } else {
        callback(null, res.body)
      }
    })
}


// ================================================
export function getAccoms () {
  return request.get('/api/v1/accoms/')
    .then(result => {
      const accoms = result.body
      return accoms
    })
    .catch(err => {
      throw Error('Cannot GET Accoms')
    })
}

export function getResorts () {
  return request.get('/api/v1/resorts')
    .then(result => {
      console.log(result)
      const resorts = result.body
      return resorts
    })
}
