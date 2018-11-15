// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Button from 'components/atoms/Button'

// Styles
import './styles.scss'

export default class Modal extends BaseComponent {
  constructor() {
    super()

    this._bind('_handleConfirmation')
  }
  _handleConfirmation(e) {
    e.preventDefault()
    console.log('save')
    // Fake save

    this.props.hideModal()
  }

  _renderAction() {
    const { action, coins } = this.props.form
    const className = action === 'add' ? 'Add' : 'Remove'
    const label = action === 'add' ? 'Agregar' : 'Quitar'

    return (
      <p
        className={`CoinsModal__Content__Data__${className}`}
      >
        {`${label}: ${coins} monedas`}
      </p>
    )
  }

  _renderTotal() {
    const { action } = this.props.form
    const currentCoins = parseInt(this.props.user.coins, 10)
    const actionCoins = parseInt(this.props.form.coins, 10)
    const totalCoins = action === 'add' ?
      currentCoins + actionCoins :
      currentCoins - actionCoins
    return <p>{`Total: ${totalCoins} monedas`}</p>
  }

  render() {
    const { email } = this.props.user
    return (
      <div className="CoinsModal">
        <div className="CoinsModal__Content">
          <p className="CoinsModal__Content__Title">
            Confirmación de la edición
          </p>
          <div className="CoinsModal__Content__Data">
            <p>Usuario: <span>{email}</span></p>
            {this._renderAction()}
            {this._renderTotal()}
          </div>
          <Button
            label="Confirmar la operación"
            action={this._handleConfirmation}
          />
        </div>
      </div>
    )
  }
}
