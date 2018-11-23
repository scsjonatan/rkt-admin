// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Header from 'components/views/Header'
import SearchBox from 'components/forms/SearchBox'

import Content from './Content'

// Actions
import { setUserData, resetCoinsForm, startSearch } from './redux/actions'

// Services
import { searchUserByAccounId } from 'services/coins'

// Styles.scss
import './styles.scss'

class Edit extends BaseComponent {
  constructor() {
    super()

    this._bind('_handleSearch')
  }

  _handleSearch(search) {
    this.props.resetCoinsForm()
    this.props.startSearch()
    searchUserByAccounId(search).then(user => {
      this.props.setUserData(user)
    })
  }

  render() {
    return (
      <div className="CoinsEdit">
        <Header title="Monedas" />
        <div className="CoinsEdit__Content">
          <div className="CoinsEdit__Content__Search">
            <SearchBox
              action={this._handleSearch}
              placeholder="Buscar por ID de cuenta"
              title="Buscar por ID de cuenta"
            />
          </div>
          <div className="CoinsEdit__Content__User">
            <Content />
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUserData: user => dispatch(setUserData(user)),
    resetCoinsForm: () => dispatch(resetCoinsForm()),
    startSearch: () => dispatch(startSearch())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Edit)
