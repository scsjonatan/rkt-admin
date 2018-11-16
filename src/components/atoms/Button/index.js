// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import { Link } from 'react-router-dom'

// Styles
import './styles.scss'

export default class Button extends BaseComponent {
  _renderElement() {
    const { action, children, direction, disabled, label } = this.props
    return this.props.isLink ? (
      <Link className="AtomButton" to={direction}>
        <div>
          <span>{children}</span>
          {label}
        </div>
      </Link>
    ) : (
      <button className="AtomButton" onClick={action} disabled={disabled}>
        <div>
          <span>{children}</span>
          {label}
        </div>
      </button>
    )
  }

  render() {
    const { className } = this.props

    return <div className={className}>{this._renderElement()}</div>
  }
}

Button.propTypes = {
  action: PropTypes.func.isRequired,
  className: PropTypes.string,
  direction: PropTypes.string,
  disabled: PropTypes.bool,
  isLink: PropTypes.bool,
  label: PropTypes.string.isRequired
}

Button.defaultProps = {
  className: '',
  disabled: false,
  isLink: false,
  direction: ''
}
