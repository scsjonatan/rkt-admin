// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import Header from 'components/views/Header'
import Button from 'components/atoms/Button'
import SearchBox from 'components/forms/SearchBox'

import ReactSVG from 'react-svg'

import List from './List'

// Services
import { fetchBricksBySearch } from 'services/bricks'

// Routes
import { reverse } from 'routes'

// Styles
import './styles.scss'

class Bricks extends BaseComponent {
  constructor() {
    super()

    this.state = {
      bricks: []
    }

    this._bind('_handleAction')
  }

  componentDidMount() {
    this._fetchBricks()
  }

  _fetchBricks(search = '') {
    fetchBricksBySearch(search).then(bricks => {
      this.setState({ bricks })
    })
  }

  _handleNewGrowth(e) {
    e.preventDefault()
  }

  _handleAction(search) {
    this._fetchBricks(search)
  }

  render() {
    const { t } = this.props
    return (
      <div className="SceneBricksHome">
        <Header title="Bricks">
          <Button
            label={t('New development')}
            action={this._handleNewGrowth}
            isLink
            direction={reverse('bricks:create')}
          >
            <ReactSVG src={require('./assets/add.svg')} />
          </Button>
        </Header>
        <div className="SceneBricksHome__Content">
          <div className="SceneBricksHome__Content__Search">
            <SearchBox
              placeholder={t('Develpment name')}
              title={t('Search')}
              action={this._handleAction}
            />
          </div>
          <List bricks={this.state.bricks} />
        </div>
      </div>
    )
  }
}

export default withNamespaces()(Bricks)
