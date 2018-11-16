// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Header from 'components/views/Header'
import SearchBox from 'components/forms/SearchBox'

import { ClipLoader } from 'react-spinners'

import Form from './components/Form'

// Actions
import { setUserData, resetCoinsForm, startSearch } from './actions'

// Services
import { searchUserByEmail } from 'services/coins'

// Styles.scss
import './styles.scss'

class Edit extends BaseComponent {
  constructor() {
    super()

    this._bind('_handleSearch', '_validateUser', '_renderUser')
  }
  _handleSearch(search) {
    this.props.resetCoinsForm()
    this.props.startSearch()
    searchUserByEmail(search).then(user => {
      this.props.setUserData(user)
    })
  }

  _validateUser() {
    const user = this.props.user.toJS()
    return user.id ? (
      <div className="GeneralContainer CoinsEdit__Content__User__Form">
        <Form />
      </div>
    ) : (
      <div className="CoinsEdit__Content__User__NoResul">No result</div>
    )
  }

  _renderUser() {
    return this.props.isLoading ? (
      <div className="CoinsEdit__Content__User__Loader">
        <ClipLoader color="#1d72db" />
      </div>
    ) : (
      this._validateUser()
    )
  }

  render() {
    return (
      <div className="CoinsEdit">
        <Header title="Monedas" />
        <div className="CoinsEdit__Content">
          <div className="CoinsEdit__Content__Search">
            <SearchBox
              action={this._handleSearch}
              placeholder="Buscar por email"
              title="Buscar por email"
            />
          </div>
          <div className="CoinsEdit__Content__User">
            {this.props.isSearched && this._renderUser()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.sceneCoinsEdit.get('user'),
    isLoading: state.sceneCoinsEdit.get('isLoading'),
    isSearched: state.sceneCoinsEdit.get('isSearched')
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
  mapStateToProps,
  mapDispatchToProps
)(Edit)
