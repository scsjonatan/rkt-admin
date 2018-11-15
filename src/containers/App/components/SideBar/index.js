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

    this.metricsItems = [
      {
        icon: require('containers/App/components/SideBar/assets/icons/home.svg'),
        label: 'Tableau'
      },
      {
        icon: require('containers/App/components/SideBar/assets/icons/home.svg'),
        label: 'Geckboard'
      },
      {
        icon: require('containers/App/components/SideBar/assets/icons/home.svg'),
        label: 'Amplitude'
      },
      {
        icon: require('containers/App/components/SideBar/assets/icons/home.svg'),
        label: 'Appboy'
      },
      {
        icon: require('containers/App/components/SideBar/assets/icons/home.svg'),
        label: 'Appsflyer'
      }
    ]
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
        icon: require('containers/App/components/SideBar/assets/icons/home.svg'),
        label: 'User Managment'
      },
      {
        icon: require('containers/App/components/SideBar/assets/icons/home.svg'),
        label: 'Bricks',
        path: reverse('bricks')
      },
      {
        icon: require('containers/App/components/SideBar/assets/icons/home.svg'),
        label: 'Houston',
        path: reverse('pandas')
      }
    ]
  }
  render() {
    return (
      <div className="SideBar">
        <List
          isMain
          items={this.navItems}
          title="Merlin Admin Panel"
        />
        <List items={this.metricsItems} title="Metrics"/>
      </div>
    )
  }
}
