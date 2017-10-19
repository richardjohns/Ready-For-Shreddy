import React from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SkiResorts from './SkiResorts'
import SearchBar from './SearchBar'

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
        {/* <Container /> */}
        {/* <img src='https://images.pexels.com/photos/300857/pexels-photo-300857.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb' className="image"/> */}
        <SearchBar />
      </div>


    )
  }
}

export default App
