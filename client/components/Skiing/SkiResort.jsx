import React from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import data from '../../../data.json'

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
              <img src={this.props.skiResort.image} />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.skiResort.skiResort}</strong> <small>{this.props.skiResort.area}</small>
                <br />
                An amazing venture into the best ski field in New Zealand!
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
