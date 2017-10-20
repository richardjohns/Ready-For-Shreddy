import { getResorts } from '../client-api'

import { getResortReport } from '../client-api'

export const SHOW_ERROR = 'SHOW_ERROR'
export const SEARCH_SKIRESORTS = 'SEARCH_SKIRESORTS'
export const REQUEST_SKIRESORTS = 'REQUEST_SKIRESORTS'
export const RECEIVE_SKIRESORTS = 'RECEIVE_SKIRESORTS'
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'

export const requestSkiResorts = () => {
  return {
    type: REQUEST_SKIRESORTS
  }
}

export const receiveSkiResorts = (resorts) => {
  return {
    type: RECEIVE_SKIRESORTS,
    resorts: resorts
  }
}

export const searchSkiResorts = (searchTerm) => {
  return {
    type: SEARCH_SKIRESORTS,
    searchTerm
  }
}

export const receiveWeather = (weather) => {
  return {
    type: RECEIVE_WEATHER,
    weather
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage
  }
}

export function searchResorts (searchTerm) {
  return (dispatch) => {
    dispatch(searchSkiResorts(searchTerm.toLowerCase()))
  }
}



export function fetchSkiResorts () {
  return (dispatch) => {
    getResorts()
      .then(resorts => {
        dispatch(receiveSkiResorts(resorts))
      })
      .catch(err => {
        throw new Error(err.message)
      })
  }
}

const objBuiler = ({freshsnow_cm, temp_avg_c, windspd_avg_kmh}) => {
  return {
    freshsnow: freshsnow_cm,
    temperature: temp_avg_c,
    windspeed: windspd_avg_kmh
  }
}
const todaysForecast = ({base, mid, upper}) => {
  return {
    base: objBuiler(base),
    mid: objBuiler(mid),
    upper: objBuiler(upper)
  }
}

export function fetchWeather (skiField) {
  return (dispatch) => {
    getResortReport(skiField, (err, weather) => {
      if (!err) {
        console.log({weather})
        const weatherObj ={
          name: weather.name,
          country: weather.country,
          forecast: todaysForecast(weather.forecast[0])
        }
        console.log(weatherObj)
        dispatch(receiveWeather(weatherObj))
      }
    })
  }
}
