// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import Nav from 'components/lists/Nav'
import Item from './Item'
import { ClipLoader } from 'react-spinners'

// Services
import { fetchUnitsByBricksId } from 'services/units'

// Styles
import './styles.scss'

class List extends BaseComponent {
  constructor(props) {
    super(props)

    const { t } = props
    this.state = {
      tabs: [
        {
          label: t('All'),
          number: 0,
          slug_name: 'all'
        },
        {
          label: t('Availables'),
          number: 0,
          slug_name: 'available'
        },
        {
          label: t('Sold'),
          number: 0,
          slug_name: 'sold'
        },
        {
          label: t('Deleted'),
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

export default withNamespaces()(List)
