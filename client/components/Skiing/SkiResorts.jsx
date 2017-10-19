import React from 'react'
import SkiResort from './SkiResort'
import { connect } from 'react-redux'

import data from '../../../data.json'

const SkiResorts = (props) => {
  return (
    <div className="" style={ {overflow: 'scroll', height: '100vh'} } >
      {(props.skiResorts.length != 0 && props.searchBar.length > 0) &&
      props.skiResorts.map((skiResort) => <SkiResort skiResort={skiResort} key={skiResort.id} />)
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    skiResorts: state.skiResorts,
    searchBar: state.searchBar
  }
}

export default connect(mapStateToProps)(SkiResorts)
