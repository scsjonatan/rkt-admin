// Dependencies
import React from 'react'
import { connect } from 'react-redux'
import onClickOutside from 'react-onclickoutside'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Preview from './Views/Preview'
import Complete from './Views/Complete'

// Actions
import { resetCoinsForm, toggleModal } from 'scenes/Coins/Edit/redux/actions'

class Content extends BaseComponent {
  constructor() {
    super()
    this.state = {
      isComplete: false,
      editStatus: false
    }
    this._bind(
      'handleClickOutside',
      '_renderContent',
      '_handleEdit',
      '_renderContent'
    )
  }

  handleClickOutside() {
    this.props.toggleModal(false)
    this.props.resetForm()
  }

  _handleEdit(status) {
    this.setState({
      isComplete: true,
      editStatus: status
    })
  }

  _renderContent() {
    const user = this.props.user.toJS()
    const form = this.props.form.toJS()
    const { isComplete, editStatus } = this.state
    return isComplete ? (
      <Complete status={editStatus} action={form.action} />
    ) : (
      <Preview user={user} form={form} handleEdit={this._handleEdit} />
    )
  }

  render() {
    return this._renderContent()
  }
}

const mapStateToProps = state => {
  return {
    form: state.sceneCoinsEdit.get('form'),
    user: state.sceneCoinsEdit.get('user')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetForm: () => dispatch(resetCoinsForm()),
    toggleModal: status => dispatch(toggleModal(status))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(onClickOutside(Content))
