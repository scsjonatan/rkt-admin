// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Styles
import './styles.scss'

export default class Container extends BaseComponent {
  render() {
    return (
      <div className="FormsContainer">
        <p className="FormsContainer__Title">{this.props.title}</p>
        <div className="FormsContainer__Fields">
          {this.props.children}
        </div>
      </div>
    )
  }
}

Container.propTypes = {
  title: PropTypes.string.isRequired
}

Container.defaultProps = {
  title: ''
}
