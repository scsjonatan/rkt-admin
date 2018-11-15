// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import ReactSVG from 'react-svg'
import { NavLink } from 'react-router-dom'

// Styles
import './styles.scss'

export default class Item extends BaseComponent {
  render() {
    const { label, icon, path } = this.props
    const _path = path ? path : '/'

    return (
      <li className="SideBar__Item">
        <NavLink
          exact
          to={_path}
          activeClassName="SideBar__Item__Active"
          className="SideBar__Item__Link"
        >
          <ReactSVG src={icon} />
          <p>{label}</p>
        </NavLink>
      </li>
    )
  }
}
