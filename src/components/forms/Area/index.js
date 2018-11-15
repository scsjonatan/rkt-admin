// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Styles
import './styles.scss'

export default class Area extends BaseComponent {
  render() {
    const {
      disabled,
      handleChange,
      placeholder,
      title,
      value
    } = this.props
    return (
      <div className="FormArea">
        <p className="FormArea__Title">{title}</p>
        <textarea
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </div>
    )
  }
}

Area.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func
}

Area.defaultProps = {
  disabled: false,
  placeholder: '',
  handleChange: () => {}
}
