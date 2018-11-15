// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'
import uuid from 'utils/uuid'

// Components
import Item from './Item'

// Styles
import './styles.scss'

export default class List extends BaseComponent {
  _renderItems(item) {
    return <Item {...item} key={uuid()} />
  }

  render() {
    const { isMain, items } = this.props
    const headStyle = isMain ? 'SideBar__List__Head' : 'SideBar__List__HeadSecond'
    const navStyle = isMain ? 'Main' : ''
    return (
      <div className={`SideBar__List ${navStyle}`}>
        <div className={headStyle}>
          <p>{this.props.title}</p>
        </div>
        <ul className="SideBar__List__Items">
          {items.map(this._renderItems)}
        </ul>
      </div>
    )
  }
}

List.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array.isRequired,
  isMain: PropTypes.bool
}

List.defaultProps = {
  isMain: false
}
