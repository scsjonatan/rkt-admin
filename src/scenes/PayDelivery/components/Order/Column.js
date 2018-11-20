// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'

export default class Column extends BaseComponent {
  _renderItem(item) {
    const { field, value, focus } = item
    const focusClass = focus ? '__Focus' : ''
    return (
      <p
        key={field + value}
        className={`PayDeliveryListItem__Data__Column${focusClass}`}
      >
        {field}: <span>{value}</span>
      </p>
    )
  }

  render() {
    return (
      <div className="PayDeliveryListItem__Data__Column">
        {this.props.items.map(this._renderItem)}
      </div>
    )
  }
}

Column.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      focus: PropTypes.bool
    })
  )
}

Column.defaultProps = {
  items: []
}
