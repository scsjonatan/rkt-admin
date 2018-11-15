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
import { setUserData } from './actions'

// Styles.scss
import './styles.scss'

class Edit extends BaseComponent {
  constructor() {
    super()

    this.state = {
      isLoading: false,
      isSearched: false
    }

    this._bind('_handleSearch', '_validateUser', '_renderUser')
  }
  _handleSearch(search) {
    console.log('Search: ', search)
    this.setState({
      isLoading: true,
      isSearched: true
    })
    // Fake search
    setTimeout(() => {
      this.setState({ isLoading: false })
      this.props.setUserData({
        id: '24343214321',
        email: 'carlos.arceo@hotmail.com',
        coins: 180
      })
    }, 1000)
  }

  _validateUser() {
    const user = this.props.user.toJS()
    return user ? (
      <div className="GeneralContainer CoinsEdit__Content__User__Form">
        <Form />
      </div>
    ) : (
      <div className="CoinsEdit__Content__User__NoResul">
        No result
      </div>
    )
  }

  _renderUser() {
    return this.state.isLoading ? (
      <div className="CoinsEdit__Content__User__Loader">
        <ClipLoader color="#1d72db" />
      </div>
    ) : this._validateUser()
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
            {this.state.isSearched && this._renderUser()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.sceneCoinsEdit.get('user')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUserData: (user) => dispatch(setUserData(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
