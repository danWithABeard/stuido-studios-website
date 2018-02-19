import React, { Component } from 'react'

export default class About extends Component <{}> {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="about-section">
        <h2>About</h2>
        <span>A VR studio based in Brooklyn, NY.</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <a className="button--primary button--primary--contact" href="#">Contact</a>
      </div>
    )
  }
}
