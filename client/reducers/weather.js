import { RECEIVE_WEATHER } from '../actions'

const initialState = {
  forecast: {
    base: { },
    mid: { },
    upper: { }
  }
}

export default (weather = initialState, action) => {
  switch (action.type) {
    case RECEIVE_WEATHER:
      return action.weather

    default:
      return weather
  }
}
