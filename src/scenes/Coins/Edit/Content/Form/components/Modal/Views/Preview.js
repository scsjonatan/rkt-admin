// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Button from 'components/atoms/Button'

// Services
import { editCoins } from 'services/coins'

export default class Preview extends BaseComponent {
  constructor() {
    super()

    this._bind('_handleConfirmation')
  }

  _handleConfirmation(e) {
    e.preventDefault()
    const form = this.props.form
    const user = this.props.user
    const { action } = form
    const { id, coins } = user

    editCoins(id, coins, action)
      .then(() => {
        this.props.handleEdit(true)
      })
      .catch(() => {
        this.props.handleEdit(false)
      })
  }

  _renderTotal() {
    const form = this.props.form
    const user = this.props.user

    const currentCoins = parseInt(user.coins, 10)
    const actionCoins = parseInt(form.coins, 10)
    const totalCoins =
      form.action === 'add'
        ? currentCoins + actionCoins
        : currentCoins - actionCoins
    return <p>{`Total: ${totalCoins} monedas`}</p>
  }

  _renderAction() {
    const { action, coins } = this.props.form
    const className = action === 'add' ? 'Add' : 'Remove'
    const label = action === 'add' ? 'Agregar' : 'Quitar'

    return (
      <p className={`CoinsModal__Content__Data__${className}`}>
        {`${label}: ${coins} monedas`}
      </p>
    )
  }

  render() {
    const user = this.props.user
    return (
      <div className="CoinsModal__Content">
        <p className="CoinsModal__Content__Title">Confirmación de la edición</p>
        <div className="CoinsModal__Content__Data">
          <p>
            Usuario: <span>{user.email}</span>
          </p>
          {this._renderAction()}
          {this._renderTotal()}
        </div>
        <Button
          label="Confirmar la operación"
          action={this._handleConfirmation}
        />
      </div>
    )
  }
}
