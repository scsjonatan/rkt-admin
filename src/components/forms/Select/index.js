// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Select from 'react-select'

// Styles
import './styles.scss'

export default class FormSelect extends BaseComponent {
  constructor() {
    super()

    this.state = {
      selectedOption: null
    }

    this._bind('_handleChange')
  }

  _handleChange(option) {
    this.setState({ selectedOption: option })
    this.props.onChange(this.props.name, option.value)
  }

  render() {
    const { title, name, disabled } = this.props
    return (
      <div className="FormSelect">
        <p className="FormSelect__Title">{title}</p>
        <Select
          value={this.state.selectedOption}
          onChange={this._handleChange}
          options={this.props.options}
          className="FormSelect__Select"
          classNamePrefix="FormSelect__Select"
          name={name}
          isDisabled={disabled}
        />
      </div>
    )
  }
}

FormSelect.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

FormSelect.defaultProps = {
  disabled: false
}
