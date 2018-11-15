// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import FormContainer from 'components/forms/Container'

// Utils
import { renderField } from './utils/RenderComponents'

export default class Contact extends BaseComponent {
  constructor(props) {
    super(props)

    const {
      email,
      phone
    } = props

    this.data = [
      {
        title: 'Email del contacto',
        value: email,
        disabled: false
      },
      {
        title: 'Teléfono del contacto',
        value: phone,
        disabled: false
      }
    ]
  }

  _renderField(field) {
    const {
      disabled,
      value,
      title
    } = field
    return renderField(title, value, disabled)
  }

  render() {
    return (
      <FormContainer
        title="Información de contacto del desarrollo"
      >
        {this.data.map(this._renderField)}
      </FormContainer>
    )
  }
}
