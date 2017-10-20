import React from 'react'
import { HashRouter as Router, Link, Route, Switch  } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SkiResorts from './Skiing/SkiResorts'
import SearchBar from './Skiing/SearchBar'
import Header from './Skiing/Header'
import AccomRoutes from './Accom/AccomRoutes'
// import Background from './Skiing/Background'
import Weather from './Weather'


class App extends React.Component {
  render () {
    return (

      <div className="container" style={{height: '100vh'}}>
        {/* <Background /> */}
        <div className='component' >
          <Header />
          <SearchBar />
          <SkiResorts />
          <Route path="/accom" component={AccomRoutes} />
          <Weather />
        </div>
      </div>

    )
  }
}

export default App

