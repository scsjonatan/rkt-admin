// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Content from './Content'

// Styles
import './styles.scss'

export default class Modal extends BaseComponent {
  render() {
    return (
      <div className="CoinsModal">
        <Content />
      </div>
    )
  }
}
