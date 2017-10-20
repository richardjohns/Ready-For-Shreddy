import React from 'react'
import {Route} from 'react-router-dom'

import getAccoms from '../../client-api'


class AccomRoutes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      accoms: [],
      errorMessage: ''
    }
    this.fetchAccoms = this.fetchAccoms.bind(this)
  }
  componentWillMount () {
    this.fetchAccoms()
  }
  fetchAccoms() {
    return getAccoms()
      .then(accoms => {
        this.setState({accoms: accoms})
      })
      .catch(err => {
        this.setState({errorMessage:err.message})
      })
  }

  render() {
    return (
      <div className = 'accom-routes'>
        <h1>  Accom </h1>
        <ul>
          {accoms.map(accom => {
            const {id, name} = accom
            return <div key={id}>
              <li><h5>{name}</h5></li>
            </div>
          })}
        </ul>
      </div>
    )
  }

}

export default AccomRoutes
