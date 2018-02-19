import React, { Component } from 'react'
import FacebookIcon from './svgs/FacebookIcon'
import InstagramIcon from './svgs/InstagramIcon'
import TwitterIcon from './svgs/TwitterIcon'
import PressIcon from './svgs/PressIcon'
import { COLORS, URLS } from './utils'

export default class Header extends Component <{}> {
	constructor(props) {
    super(props)
    this.state = {
      showStickyNav: false
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    // console.log('state is', this.state, document.documentElement.scrollTop)
    let scrollTop = document.documentElement.scrollTop

    if (scrollTop > 350) {
      this.setState({ showStickyNav: true})
    } else {
      this.setState({ showStickyNav: false })
    }
  }

  render() {
    const stickyClasses = [ 'sticky-nav',
      this.state.showStickyNav ? 'sticky-nav--visible' : undefined
    ].join(' ');

		return (
      <div>
        <div className="games-drawer">
          <a href="#games" title=""><img src="./img/dont-look-away-icon.png" width="100" alt="Dont Look Away" /></a>
          <a href="#games" title=""><img src="./img/memraxz2.png" width="100" alt="Memraxz 2" /></a>
          <a href="#games" title=""><img src="./img/take-logo.png" width="100" alt="The Take" /></a>
        </div>
        <header>
          <div className={stickyClasses}>
            <div className="sticky-nav__webiste-links">
              <div>
                <a href="#top" className="website-links__logo">Stuido</a>
                <a href="#games" className="website-links">Games</a>
                <a href="#about" className="website-links">About</a>
                <a href={URLS.CONTACT} className="website-links">Contact</a>
                <a href={URLS.PRESS_KIT} className="website-links">Press</a>
              </div>

              <div></div>

              <div className="social-links">
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

            <div className="sticky-nav__games-list">
              <a href="#dont-look-away">Don't Look Away</a>
            </div>
          </div>

          <nav>
            <a href="#games">Games</a>
            <a href="#about">About</a>
            <a href="#top">
              <img src="./img/stuido-logo.png" alt="Stuido Studios" width="125" />
            </a>
            <a href={URLS.CONTACT}>Contact</a>
            <a href={URLS.PRESS_KIT}>Press</a>
          </nav>
          <h1>We are a VR studio based in Brooklyn, NY.</h1>
        </header>
      </div>
		)
	}
}
