import React from 'react'
import {Route, Link, Switch } from 'react-router-dom'
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
          <Switch>
            <Route path="/view" component={(props) => <AccomRoutes {...props }/>} />
            <Route exact path='/' component={(props) => <div>
              <SearchBar />
              <SkiResorts />
            </div>} />
            <Route path="/weather" component={Weather} />
          </Switch>
        </div>
      </div>

    )
  }
}

export default App