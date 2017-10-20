import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class SkiResorts extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    // this.fetchDeal = this.fetchDeal.bind(this)
  }

  render () {
    return (
      <div className="column is-4 is-desktop-only company">
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img src={this.props.skiResort.url} />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p className='has-text-weight-bold has-text-black-bis'><Link to='/view/:id'>
                <strong>{this.props.skiResort.ski_resort}</strong></Link> <small>{this.props.skiResort.area}</small>
              <br />
              {this.props.skiResort.description}
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item">
                  <span className="icon is-small"><i className="fa fa-reply"></i></span>
                </a>
                <a className="level-item">
                  <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                </a>
                <a className="level-item">
                  <span className="icon is-small"><i className="fa fa-heart"></i></span>
                </a>
              </div>
            </nav>
          </div>
          <div className="media-right">
            <button className="delete"></button>
          </div>
        </article>
      </div>
    )
  }
}

export default SkiResorts
