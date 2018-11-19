// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import List from './components/List'

// Routes
import { reverse } from 'routes'

// Styles
import './styles.scss'

class SideBar extends BaseComponent {
  constructor(props) {
    super(props)
    const { t } = this.props
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
        label: t('Bricks'),
        path: reverse('bricks')
      },
      {
        icon: require('containers/App/components/SideBar/assets/icons/houston.svg'),
        label: t('Houston'),
        path: reverse('payDelivery')
      },
      {
        icon: require('containers/App/components/SideBar/assets/icons/coins.svg'),
        label: t('Coins'),
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

export default withNamespaces()(SideBar)
