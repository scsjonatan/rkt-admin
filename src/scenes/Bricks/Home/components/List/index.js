// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Nav from './components/Nav'
import Item from './components/Item'

// Styles
import './styles.scss'

export default class List extends BaseComponent {
  render() {
    return (
      <div className="GeneralContainer BricksList">
        <Nav />
        <div className="BricksList__Content">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    )
  }
}
