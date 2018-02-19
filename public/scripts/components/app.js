import React, { Component } from 'react'
import Header from './header'
import Twitter from './twitter'
import About from './about'
import Instagram from './instagram'
import Games from './games'
import Team from './team'
import Footer from './footer'

export default class App extends Component <{}> {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <a name="top"></a>
        <Header />
        <Twitter pinnedTweet={true} />
        <Games />
        <Twitter pinnedTweet={false} />
        <Team />
        <Footer />
      </div>
    )
  }
}
