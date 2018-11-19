// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'
import uuid from 'utils/uuid'

// Internalization
import { withNamespaces } from 'react-i18next'

class History extends BaseComponent {
  constructor() {
    super()
    this._bind('_renderElement')
  }
  _renderElement(element) {
    const { t } = this.props
    return (
      <li key={uuid()}>
        <p>{t(element.label)}</p>
        <span>{element.date}</span>
      </li>
    )
  }
  render() {
    return (
      <div className="PayDeliveryOrderDetail__Content__History__Content">
        <ul>{this.props.history.map(this._renderElement)}</ul>
      </div>
    )
  }
}

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object)
}

export default withNamespaces()(History)
