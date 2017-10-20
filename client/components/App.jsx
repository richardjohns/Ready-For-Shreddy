import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SkiResorts from './Skiing/SkiResorts'
import SearchBar from './Skiing/SearchBar'
import Header from './Skiing/Header'
import AccomRoutes from './Accom/AccomRoutes'
// import Background from './Skiing/Background'


class App extends React.Component {
  render () {
    return (

      <div className="container" style={{height: '100vh'}}>
        {/* <Background /> */}
        <div className='component' >
          <Header />
          <SearchBar />
          <SkiResorts />
          <AccomRoutes />
        </div>
      </div>

    )
  }
}

export default App

{/* <img src='https://images.pexels.com/photos/300857/pexels-photo-300857.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb' className="image"/> */}
