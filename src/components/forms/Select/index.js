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
      value: null
    }

    this._bind('_handleChange')
  }

  _handleChange(value) {
    this.setState({ value })
  }

  render() {
    const { title } = this.props
    return (
      <div className="FormSelect">
        <p className="FormSelect__Title">{title}</p>
        <Select
          value={this.state.value}
          onChange={this._handleChange}
          options={this.props.options}
          className="FormSelect__Select"
          classNamePrefix="FormSelect__Select"
        />
      </div>
    )
  }
}

FormSelect.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object)
}
