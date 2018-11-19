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

    const { t } = props
    this.state = {
      tabs: [
        {
          label: t('All'),
          number: 0,
          slug_name: 'all'
        },
        {
          label: t('Publics'),
          number: 0,
          slug_name: 'public'
        },
        {
          label: t('Deleted'),
          number: 0,
          slug_name: 'deleted'
        }
      ]
    }

    this._bind('_handleTab')
  }

  _renderBricks(brick) {
    return <Item key={brick.ad_id} {...brick} />
  }

  _handleTab(tab) {
    this.props.changeTab(tab)
  }

  render() {
    const { bricks, filter } = this.props
    return (
      <div className="GeneralContainer BricksList">
        <Nav tabs={this.state.tabs} handleTab={this._handleTab} />
        <div className="BricksList__Content">
          {bricks[filter].map(this._renderBricks)}
        </div>
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
