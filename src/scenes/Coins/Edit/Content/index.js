// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import { ClipLoader } from 'react-spinners'
import Form from './Form'

class Content extends BaseComponent {
  constructor() {
    super()

    this._bind('_validateUser', '_renderUser')
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
    const { isSearched } = this.props
    return isSearched ? this._renderUser() : null
  }
}

const mapStateToProps = state => {
  return {
    isSearched: state.sceneCoinsEdit.get('isSearched'),
    isLoading: state.sceneCoinsEdit.get('isLoading'),
    user: state.sceneCoinsEdit.get('user')
  }
}

export default connect(mapStateToProps)(Content)
