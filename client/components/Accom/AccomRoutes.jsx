import React from 'react'
import {Route} from 'react-router-dom'

import { getAccoms } from '../../client-api'


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
    const accoms = this.state.accoms
    return (
      <div className = 'accom-routes'>
        <ul>
          {accoms.map(accom => {
            const {id, name, intro, image, website} = accom
            return <div key={id}>
              <li><h5>{name}</h5></li>
              <li><p>{intro}</p></li>
              <li><p>{website}</p></li>
              <li><img src={image} alt="" height="200" width="200"></img></li>
            </div>
          })}
        </ul>
      </div>
    )
  }

}

export default AccomRoutes
