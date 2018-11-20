// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import Nav from 'components/lists/Nav'
import Item from './Item'

// Actions
import { changeTab } from 'scenes/Bricks/Home/redux/actions'

// Styles
import './styles.scss'

class List extends BaseComponent {
  constructor(props) {
    super(props)

    const { t, bricks } = props
    this.state = {
      tabs: [
        {
          label: t('All'),
          number: bricks.all.length,
          slug_name: 'all'
        },
        {
          label: t('Publics'),
          number: bricks.public.length,
          slug_name: 'public'
        },
        {
          label: t('Deleted'),
          number: bricks.deleted.length,
          slug_name: 'deleted'
        }
      ]
    }

    this._bind('_handleTab', '_renderContent')
  }

  _renderBricks(brick) {
    return <Item key={brick.ad_id} {...brick} />
  }

  _handleTab(tab) {
    this.props.changeTab(tab)
  }

  _renderContent() {
    const { bricks, filter } = this.props
    return bricks[filter].length ? (
      <div className="BricksList__Content">
        {bricks[filter].map(this._renderBricks)}
      </div>
    ) : (
      <div className="BricksList__NoResults">Sin resultados</div>
    )
  }

  render() {
    return (
      <div className="GeneralContainer BricksList">
        <Nav tabs={this.state.tabs} handleTab={this._handleTab} />
        {this._renderContent()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    filter: state.sceneBricksHome.get('filter'),
    bricks: state.sceneBricksHome.get('bricks')
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
  )(List)
)
