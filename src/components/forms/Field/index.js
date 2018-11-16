// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Styles
import './styles.scss'

export default class Field extends BaseComponent {
  _renderTitle() {
    const { title } = this.props
    return title ? <p className="FormField__Title">{title}</p> : null
  }

  render() {
    const {
      className,
      disabled,
      name,
      onChange,
      placeholder,
      value
    } = this.props
    return (
      <div className={`FormField ${className}`}>
        {this._renderTitle()}
        <input
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    )
  }
}

Field.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.any.isRequired
}

Field.defaultProps = {
  className: '',
  disabled: false,
  onChange: () => {},
  placeholder: '',
  title: ''
}
