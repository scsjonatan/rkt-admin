// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import SearchBox from 'components/forms/SearchBox'
import List from './List'
import { ClipLoader } from 'react-spinners'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Actions
import { fetchBricksByFilterSearch } from 'scenes/Bricks/Home/redux/actions'

class Content extends BaseComponent {
  constructor() {
    super()
    this._bind('_handleAction')
  }

  _handleAction(search) {
    const { filter } = this.props
    this.props.fetchBricks(filter, search)
  }

  render() {
    const { t, isLoading } = this.props
    return isLoading ? (
      <div className="SceneBricksHome__Loading">
        <ClipLoader color="#1d72db" />
      </div>
    ) : (
      <div className="SceneBricksHome__Content">
        <div className="SceneBricksHome__Content__Search">
          <SearchBox
            placeholder={t('Develpment name')}
            title={t('Search')}
            action={this._handleAction}
            startValue={this.props.search}
          />
        </div>
        <List />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    filter: state.sceneBricksHome.get('filter'),
    isLoading: state.sceneBricksHome.get('isLoading')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBricks: (filter, search) =>
      fetchBricksByFilterSearch(filter, search, dispatch)
  }
}

export default withNamespaces()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Content)
)
