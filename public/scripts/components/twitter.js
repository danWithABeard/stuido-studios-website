import React, { Component } from 'react'
import { URLS } from './utils'
import TwitterIcon from './svgs/TwitterIcon'

export default class Twitter extends Component <{}> {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.pinnedTweet) {
      return(
        <div className="twitter__wrapper">
          <p>The Take will be at <a href="#">#PAXEast</a> this year! April 5th - 8th! <a href="#">#indiedevhour</a> <a href="#">#gamedev</a> <a href="#">#indiedev</a></p>
          <div className="handle__wrapper">
            <div className="twitter__icon"><TwitterIcon fillColor="#ffffff" /></div>
            <a className="twitter__handle" href={URLS.TWITTER}>@Stuido_Studios</a>
          </div>
        </div>
      )
    } else {
      return (
        <div className="twitter__wrapper">
          <p>Stress testing the pressure traps. <a href="#">#screenshotsaturday</a> <a href="#">#indiedev</a> <a href="#">#gamedev</a></p>
          <div className="handle__wrapper">
            <div className="twitter__icon"><TwitterIcon fillColor="#ffffff" /></div>
            <a className="twitter__handle" href={URLS.TWITTER}>@Stuido_Studios</a>
          </div>
        </div>
      )
    }
  }
}
