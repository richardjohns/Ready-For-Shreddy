import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AccomRoutes from './Accom/AccomRoutes'

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <Route>
          <AccomRoutes />
        </Route>
      </div>
    )
  }
}

export default App
