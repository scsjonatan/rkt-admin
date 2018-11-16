// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import List from './components/List'

// Routes
import { reverse } from 'routes'

// Styles
import './styles.scss'

export default class SideBar extends BaseComponent {
  constructor() {
    super()
    this.navItems = [
      {
        icon: require('containers/App/components/SideBar/assets/icons/home.svg'),
        label: 'Home'
      },
      {
        icon: require('containers/App/components/SideBar/assets/icons/home.svg'),
        label: 'Ad moderation'
      },
      {
        icon: require('containers/App/components/SideBar/assets/icons/home.svg'),
        label: 'Ad managment'
      },
      {
        icon: require('containers/App/components/SideBar/assets/icons/userManage.svg'),
        label: 'User Managment'
      },
      {
        icon: require('containers/App/components/SideBar/assets/icons/bricks.svg'),
        label: 'Bricks',
        path: reverse('bricks')
      },
      {
        icon: require('containers/App/components/SideBar/assets/icons/houston.svg'),
        label: 'Houston',
        path: reverse('pandas')
      },
      {
        icon: require('containers/App/components/SideBar/assets/icons/coins.svg'),
        label: 'Monedas',
        path: reverse('coins')
      }
    ]
  }
  render() {
    return (
      <div className="SideBar">
        <List isMain items={this.navItems} title="Merlin Admin Panel" />
      </div>
    )
  }
}
