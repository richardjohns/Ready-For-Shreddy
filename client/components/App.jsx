import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SkiResorts from './SkiResorts'
import SearchBar from './SearchBar'

import AccomRoutes from './Accom/AccomRoutes'

class App extends React.Component {
  render () {
    return (
        <div className="container">
          <Route>
            <SearchBar />
            <AccomRoutes />
        </Route>
      </div>
    )
  }
}

export default App
