import React, { Component } from 'react'
import FacebookIcon from './svgs/FacebookIcon'
import InstagramIcon from './svgs/InstagramIcon'
import TwitterIcon from './svgs/TwitterIcon'
import PressIcon from './svgs/PressIcon'
import { COLORS, URLS } from './utils'

export default class Footer extends Component <{}> {
	constructor(props) {
    super(props)
  }

  render() {
		return(
      <footer>
        <div className="footer-accent"></div>
        <div className="footer-content">
          <p>&copy; 2018 Stuido Studios</p>

          <div>
            <a href="#games" className="website-links">Games</a> |
            <a href="#about" className="website-links">About</a> |
            <a href={URLS.CONTACT} className="website-links">Contact</a> |
            <a href={URLS.PRESS_KIT} className="website-links">Press</a>
          </div>

          <div className="footer-links">
            <a className="header__icons" href={URLS.FACEBOOK}>
              <FacebookIcon fillColor='#151415' />
            </a>
            <a className="header__icons" href={URLS.INSTAGRAM}>
              <InstagramIcon />
            </a>
            <a className="header__icons" href={URLS.TWITTER}>
              <TwitterIcon fillColor='#151415' />
            </a>
            <a className="header__icons" href={URLS.PRESS_KIT}>
              <PressIcon />
            </a>
          </div>
        </div>
      </footer>
		)
	}
}
