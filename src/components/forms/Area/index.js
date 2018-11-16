// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Styles
import './styles.scss'

export default class Area extends BaseComponent {
  render() {
    const { disabled, onChange, name, placeholder, title, value } = this.props
    return (
      <div className="FormArea">
        <p className="FormArea__Title">{title}</p>
        <textarea
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

Area.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func
}

Area.defaultProps = {
  disabled: false,
  placeholder: '',
  onChange: () => {}
}
