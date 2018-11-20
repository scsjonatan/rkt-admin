// Dependencies
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import Nav from 'components/lists/Nav'
import Item from './Item'

// Actions
import { changeTab } from './redux/actions'

class Content extends BaseComponent {
  constructor(props) {
    super(props)

    const { t, units } = props
    this.state = {
      tabs: [
        {
          label: t('All'),
          number: units.all.length,
          slug_name: 'all'
        },
        {
          label: t('Availables'),
          number: units.available.length,
          slug_name: 'available'
        },
        {
          label: t('Sold'),
          number: units.sold.length,
          slug_name: 'sold'
        },
        {
          label: t('Deleted'),
          number: units.deleted.length,
          slug_name: 'deleted'
        }
      ]
    }

    this._bind('_renderUnits', '_handleTab')
  }

  _handleTab(tab) {
    this.props.changeTab(tab)
  }

  _renderUnits(unit) {
    const brickId = this.context.router.route.match.params.id
    return <Item key={unit.id} {...unit} brickId={brickId} />
  }

  render() {
    const { units, filter } = this.props
    return (
      <div className="GeneralContainer BricksList">
        <Nav tabs={this.state.tabs} handleTab={this._handleTab} />
        <div className="BricksList__Content">
          {units[filter].map(this._renderUnits)}
        </div>
      </div>
    )
  }
}

Content.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    units: state.sceneBricksUnitsList.get('units'),
    filter: state.sceneBricksUnitsList.get('filter')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeTab: tab => dispatch(changeTab(tab))
  }
}

export default withNamespaces()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Content)
)
