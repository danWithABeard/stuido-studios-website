import React, { Component } from 'react'
import { URLS } from './utils'

export default class Games extends Component <{}> {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="games-section games-section--left games-section--dont-look-away">
        <a name="games"></a>
        <a name="dont-look-away"></a>
        <div className="games-section__copy-wrapper">
          <h2>Don't Look Away</h2>
          <h3>A mysterious entity is bent on breaking down your mind, body, and soul before it feeds.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <a className="button--primary button--primary--learn-more" href={URLS.DONT_LOOK_AWAY}>Learn More</a>
        </div>
      </div>
    )
  }
}
