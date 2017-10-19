import React from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Container from './Container'
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
      <div>
        <div className="container">
          {/* <Container /> */}
          <SearchBar />
          <h2>Where would you like to go?</h2>
        </div>
      </div>

    )
  }
}

export default App
