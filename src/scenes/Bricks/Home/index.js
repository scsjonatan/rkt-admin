// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Header from 'components/views/Header'
import Button from 'components/atoms/Button'
import SearchBox from 'components/forms/SearchBox'

import ReactSVG from 'react-svg'

import List from './components/List'

// Routes
import { reverse } from 'routes'

// Styles
import './styles.scss'

export default class Bricks extends BaseComponent {
  _handleNewGrowth(e) {
    e.preventDefault()
  }

  _handleAction(search) {
    console.log(search)
  }

  render() {
    return (
      <div className="SceneBricksHome">
        <Header title="Bricks">
          <Button
            label="Nuevo Desarrollo"
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
              placeholder="Nombre del desarrollo"
              title="Buscar Desarrollo"
              action={this._handleAction}
            />
          </div>
          <List />
        </div>
      </div>
    )
  }
}
