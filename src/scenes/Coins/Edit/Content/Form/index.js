// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'
import Validator from 'validatorjs'

// Components
import FormField from 'components/forms/Field'
import Button from 'components/atoms/Button'

import Action from './components/Action'
import Modal from './components/Modal'

// Actions
import { updateFormByField, toggleModal } from 'scenes/Coins/Edit/redux/actions'

// Styles
import './styles.scss'

const COINS_IMAGE = require('./assets/coins.png')

class Form extends BaseComponent {
  constructor() {
    super()
    this._bind('_handleChange', '_handleSave', '_handleAction', '_renderModal')
  }
  _handleSave(e) {
    e.preventDefault()
    this._validateData()
  }

  _validateData() {
    const rules = { coins: 'required|numeric', action: 'required|string' }
    const data = this.props.form.toJS()
    let validation = new Validator(data, rules)
    if (validation.passes()) {
      this._saveData()
    }
  }

  _saveData() {
    const { action } = this.props.form.toJS()
    if (action === 'add' || action === 'remove') {
      this.props.toggleModal(true)
    }
  }

  _handleChange(e) {
    this.props.updateForm('coins', e.target.value)
  }

  _handleAction(action) {
    this.props.updateForm('action', action)
  }

  _renderModal() {
    return this.props.showModal ? <Modal /> : null
  }

  render() {
    const form = this.props.form.toJS()
    const user = this.props.user.toJS()
    return (
      <div className="FormCoinsEdit">
        <div className="FormCoinsEdit__Data">
          <p className="FormCoinsEdit__Data__Id">Id: {user.id}</p>
          <div className="FormCoinsEdit__Data__Coins">
            <p>{user.coins}</p>
            <img src={COINS_IMAGE} alt="Coins" />
          </div>
        </div>
        <div className="FormCoinsEdit__Actions">
          <Action handleAction={this._handleAction} />
          <div className="FormCoinsEdit__Actions__Number">
            <FormField
              placeholder="Número de Monedas"
              value={form.coins}
              onChange={this._handleChange}
            />
          </div>
          <div className="FormCoinsEdit__Actions__Button">
            <Button action={this._handleSave} label="Aplicar" />
          </div>
        </div>
        {this._renderModal()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    form: state.sceneCoinsEdit.get('form'),
    user: state.sceneCoinsEdit.get('user'),
    showModal: state.sceneCoinsEdit.get('showModal')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateForm: (field, value) => dispatch(updateFormByField(field, value)),
    toggleModal: status => dispatch(toggleModal(status))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
