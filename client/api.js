
import request from 'superagent'

export function getResortReport(skiField, callback) {
  request
    .get("/api/v1/snowreport/" + skiField)
    .end((err, res) => {
      if (err) {
        callback(err)
        console.log(err)
      } else {
        callback(null, res.body)
      }
    })
}