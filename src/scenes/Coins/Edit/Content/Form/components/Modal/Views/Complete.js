// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Button from 'components/atoms/Button'

// Actions
import { resetCoinsForm, toggleModal } from 'scenes/Coins/Edit/redux/actions'

class Complete extends BaseComponent {
  _closeModal() {
    this.props.resetForm()
    this.props.toggleModal(false)
  }

  _successLabel() {
    return this.props.action === 'add'
      ? `Las monedas se agregaron con éxito a la cuenta.`
      : `Las monedas se quitaron con éxito de la cuenta.`
  }

  _validateLabel() {
    return this.props.status
      ? this._successLabel()
      : `La operación no pudo ser completada, inténtalo nuevamente más tarde.`
  }

  render() {
    return (
      <div className="CoinsModal__Content">
        <p
          className={`CoinsModal__Content__Complete__Title
          ${this.props.status}`}
        >
          {this._validateLabel()}
        </p>
        <Button label="Cerrar" action={this._closeModal} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetForm: () => dispatch(resetCoinsForm()),
    toggleModal: status => dispatch(toggleModal(status))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Complete)
