import React from 'react'
import SkiResorts from './SkiResorts'
import { connect } from 'react-redux'

import data from '../../data.json'

const Container = (props) => {
  return (
    <div className="">
      {props.skiResorts.length != 0
        ? props.skiResorts.map((skiResort) => <SkiResorts skiResort={skiResort} key={skiResort.id} />)
        : <h1 className="title is-3" >No Results Found</h1>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    skiResorts: state.skiResorts
  }
}

export default connect(mapStateToProps)(Container)
