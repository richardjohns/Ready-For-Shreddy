import React from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SkiResorts from './Skiing/SkiResorts'
import SearchBar from './Skiing/SearchBar'
import Header from './Skiing/Header'

class App extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {

  //   }
  // }
  render () {
    return (
      // <Router>

      <div className="container">
        <Header />
        <SearchBar />
        <SkiResorts />
        {/* <img src='https://images.pexels.com/photos/300857/pexels-photo-300857.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb' className="image"/> */}
      </div>


    )
  }
}

export default App
