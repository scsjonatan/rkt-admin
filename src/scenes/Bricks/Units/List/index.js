// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Nav from 'components/lists/Nav'
import Item from './Item'
import { ClipLoader } from 'react-spinners'

// Services
import { fetchUnitsByBricksId } from 'services/units'

// Styles
import './styles.scss'

export default class List extends BaseComponent {
  constructor() {
    super()

    this.state = {
      tabs: [
        {
          label: 'Todos',
          number: 0,
          slug_name: 'all'
        },
        {
          label: 'Disponibles',
          number: 0,
          slug_name: 'available'
        },
        {
          label: 'Vendidos',
          number: 0,
          slug_name: 'sold'
        },
        {
          label: 'Eliminados',
          number: 0,
          slug_name: 'deleted'
        }
      ],
      units: []
    }

    this._bind('_renderUnits')
  }

  componentDidMount() {
    const brickId = this.context.router.route.match.params.id
    // Fake Get units
    fetchUnitsByBricksId(brickId).then(units => {
      this.setState({ units })
    })
  }

  _renderUnits(unit) {
    const brickId = this.context.router.route.match.params.id
    return <Item key={unit.id} {...unit} brickId={brickId} />
  }

  _renderContent() {
    return this.state.isLoading ? (
      <div className="BricksList__Loader">
        <ClipLoader color="#1d72db" />
      </div>
    ) : (
      <div className="BricksList__Content">
        {this.state.units.map(this._renderUnits)}
      </div>
    )
  }

  render() {
    return (
      <div className="GeneralContainer BricksList">
        <Nav tabs={this.state.tabs} />
        {this._renderContent()}
      </div>
    )
  }
}

List.contextTypes = {
  router: PropTypes.object.isRequired
}
