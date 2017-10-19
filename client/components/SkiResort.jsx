import React from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import data from '../../data.json'

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
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="{this.props.skiResort.image} " />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{this.props.skiResort.skiResort}</strong> <small>{this.props.skiResort.area}</small>
                <br />
                An amazing venture into the best ski field in New Zealand!
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item">
                  <span class="icon is-small"><i class="fa fa-reply"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fa fa-heart"></i></span>
                </a>
              </div>
            </nav>
          </div>
          <div class="media-right">
            <button class="delete"></button>
          </div>
        </article>
      </div>
    )
  }
}

export default SkiResorts
