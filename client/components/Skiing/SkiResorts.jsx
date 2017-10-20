import React from 'react'
import SkiResort from './SkiResort'
import { connect } from 'react-redux'


const SkiResorts = (props) => {
  return (
    <div>
      {(props.skiResorts.length != 0 && props.searchBar.length > 0) &&
        <div className="" style={ {overflow: 'scroll', height: '100vh'} } >
          {props.skiResorts.map((skiResort) => <SkiResort skiResort={skiResort} key={skiResort.id} />)}
        </div>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    skiResorts: state.skiResorts.search,
    searchBar: state.searchBar
  }
}

export default connect(mapStateToProps)(SkiResorts)
