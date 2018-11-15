// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import SideBar from './components/SideBar'

// Styles
import './styles.scss'

export default class App extends BaseComponent {
  render() {
    return (
      <div className="AppContainer">
        <SideBar />
        <div className="AppContainer__Content">
          {this.props.children}
        </div>
      </div>
    )
  }
}
