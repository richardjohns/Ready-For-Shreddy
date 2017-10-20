import React from 'react'
import { connect } from 'react-redux'
import { fetchSkiResorts, searchResorts } from '../../actions'
import SkiResorts from './SkiResorts'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      skiResort: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    this.props.dispatch(fetchSkiResorts())
  }
  handleChange (evt) {
    this.setState({
      skiResort: evt.target.value
    })
    this.props.dispatch(searchResorts(evt.target.value))
  }

  render () {
    return (
      <div className="field" style={{marginTop: this.props.resorts.length == 0 ? '40vh' : '10vh'}}>
        <span className="control">
          <input onChange={(e) => this.handleChange(e)} value={this.state.skiResort} type="text" placeholder="Search..." className="input is-medium" />
        </span>
        <h2>Where would you like to go?</h2>
        {/* <Container /> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    resorts: state.skiResorts.search
  }
}

export default connect(mapStateToProps)(SearchBar)
