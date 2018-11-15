// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'
import Validator from 'validatorjs'

// Components
import FormField from 'components/forms/Field'
import Button from 'components/atoms/Button'

import Action from './components/Action'
import Modal from './components/Modal'

// Styles
import './styles.scss'

export default class Form extends BaseComponent {
  constructor() {
    super()

    this.state = {
      form: {
        coins: '',
        action: null
      },
      user: {
        coins: 180,
        email: 'carlos.salcedo@hotmail.com'
      },
      showModal: false
    }

    this._bind('_handleChange', '_handleSave', '_handleAction', '_renderModal', '_hideModal')
  }
  _handleSave(e) {
    e.preventDefault()
    this._validateData()
  }

  _validateData() {
    const rules = {
      coins: 'required|numeric',
      action: 'required|string'
    }

    let validation = new Validator(this.state.form, rules)
    if (validation.passes()) {
      this._saveData()
    }
  }

  _saveData() {
    const { action } = this.state.form
    if (action === 'add' || action === 'remove') {
      this.setState({ showModal: true })
    } else {
      this.setState({
        form: {
          coins: '',
          action: null
        }
      })
    }
  }

  _handleChange(e) {
    this.setState({
      form: {
        ...this.state.form,
        coins: e.target.value
      }
    })
  }

  _handleAction(action) {
    this.setState({
      form: {
        ...this.state.form,
        action
      }
    })
  }

  _hideModal() {
    this.setState({
      showModal: false
    })
  }

  _renderModal() {
    return this.state.showModal ? (
      <Modal
        form={this.state.form}
        user={this.state.user}
        hideModal={this._hideModal}
      />
    ) : null
  }

  render() {
    const { coins } = this.state.form
    return (
      <div className="FormCoinsEdit">
        <div className="FormCoinsEdit__Data">
          <p className="FormCoinsEdit__Data__Email">carlos.arce@hotmail.com</p>
          <p>{this.state.user.coins}</p>
        </div>
        <div className="FormCoinsEdit__Actions">
          <Action handleAction={this._handleAction} />
          <div className="FormCoinsEdit__Actions__Number">
            <FormField
              placeholder="Número de Monedas"
              value={coins}
              onChange={this._handleChange}
            />
          </div>
          <div className="FormCoinsEdit__Actions__Button">
            <Button
              action={this._handleSave}
              label="Aplicar"
            />
          </div>
        </div>
        {this._renderModal()}
      </div>
    )
  }
}
