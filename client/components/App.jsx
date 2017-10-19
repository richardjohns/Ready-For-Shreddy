import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import SkiResorts from './SkiResorts'
import SearchBar from './SearchBar'

import AccomRoutes from './Accom/AccomRoutes'

class App extends React.Component {
  render () {
    return (
        <div className="container">
          <SearchBar />

          <AccomRoutes />
      </div>


    )
  }
}

export default App
