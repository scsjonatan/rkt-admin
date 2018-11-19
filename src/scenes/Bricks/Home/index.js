// Dependencies
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'
import { getParamByName } from 'utils/url'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import Header from 'components/views/Header'
import Button from 'components/atoms/Button'
import SearchBox from 'components/forms/SearchBox'
import { ClipLoader } from 'react-spinners'
import ReactSVG from 'react-svg'
import List from './List'

// Actions
import { fetchBricksByFilterSearch } from './redux/actions'

// Routes
import { reverse } from 'routes'

// Styles
import './styles.scss'

class Bricks extends BaseComponent {
  constructor() {
    super()
    this._bind('_handleAction', '_renderContent', '_handleAction')
  }

  componentDidMount() {
    const paramQ = getParamByName('q')
    const _search = paramQ ? paramQ : ''
    const { filter } = this.props
    this.props.fetchBricks(filter, _search)
  }

  _handleNewGrowth(e) {
    e.preventDefault()
  }

  _handleAction(search) {
    const { filter } = this.props
    this.props.fetchBricks(filter, search)
  }

  _renderContent() {
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
        {this._renderContent()}
      </div>
    )
  }
}

Bricks.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    bricks: state.sceneBricksHome.get('bricks'),
    search: state.sceneBricksHome.get('search'),
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
  )(Bricks)
)
