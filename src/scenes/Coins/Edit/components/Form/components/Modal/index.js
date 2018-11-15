// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Button from 'components/atoms/Button'

// Actions
import { toggleModal } from 'scenes/Coins/Edit/actions'

// Styles
import './styles.scss'

class Modal extends BaseComponent {
  constructor() {
    super()

    this._bind('_handleConfirmation')
  }
  _handleConfirmation(e) {
    e.preventDefault()
    console.log('save')
    // Fake save

    this.props.toggleModal(false)
  }

  _renderAction() {
    const { action, coins } = this.props.form.toJS()
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
    const form = this.props.form.toJS()
    const user = this.props.user.toJS()

    const currentCoins = parseInt(user.coins, 10)
    const actionCoins = parseInt(form.coins, 10)
    const totalCoins = form.action === 'add' ?
      currentCoins + actionCoins :
      currentCoins - actionCoins
    return <p>{`Total: ${totalCoins} monedas`}</p>
  }

  render() {
    const user = this.props.user.toJS()
    console.log(user)
    return (
      <div className="CoinsModal">
        <div className="CoinsModal__Content">
          <p className="CoinsModal__Content__Title">
            Confirmación de la edición
          </p>
          <div className="CoinsModal__Content__Data">
            <p>Usuario: <span>{this.props.user.toJS().email}</span></p>
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

const mapStateToProps = state => {
  return {
    form: state.sceneCoinsEdit.get('form'),
    user: state.sceneCoinsEdit.get('user')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: status => dispatch(toggleModal(status))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
