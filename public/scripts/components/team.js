import React, { Component } from 'react'

export default class Team extends Component <{}> {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="team-section">
        <a name="about"></a>
        <h2>Inside the Stuido</h2>

        <div className="team-section__copy">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>

        <div className="team-wrapper">
          <div className="bio-wrapper">
            <div className="bio-image__wrapper">
              <div className="bio-image__overlay">
                <div className="bio__label">Favorite Game:</div>
                <div className="bio__text">The Soul series</div>
              </div>
              <img src="./img/jose.jpg" alt="Jose Zambrano: Design" />
            </div>
            <h3>Jose Zambrano</h3>
            <h4>
            <span className="icon-controller"></span>Design</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div className="bio-wrapper">
            <div className="bio-image__wrapper">
              <div className="bio-image__overlay">
                <div className="bio__label">Favorite Game:</div>
                <div className="bio__text">Depends on the context</div>
              </div>
              <img src="./img/rob.jpg" alt="Rob Canciello: Producer" />
            </div>
            <h3>Rob Canciello</h3>
            <h4>
            <span className="icon-controller"></span>Producer</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div className="bio-wrapper">
            <div className="bio-image__wrapper">
              <div className="bio-image__overlay">
                <div className="bio__label">Favorite Game:</div>
                <div className="bio__text">Banjo-Kazooie</div>
              </div>
              <img src="./img/john.jpg" alt="John Corn: Code" />
            </div>
            <h3>John Corn</h3>
            <h4>
            <span className="icon-controller"></span>Code</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
      </div>
    )
  }
}
