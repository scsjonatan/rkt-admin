// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import FormContainer from 'components/forms/Container'

// Utils
import { renderField } from './utils/RenderComponents'

export default class Owner extends BaseComponent {
  constructor(props) {
    super(props)

    const {
      company_id,
      email,
      name,
      phone
    } = props

    this.data = [
      {
        title: 'Nombre del desarrollador',
        value: name,
        disabled: false
      },
      {
        title: 'Identificador de compañia',
        value: company_id,
        disabled: true
      },
      {
        title: 'Email',
        value: email,
        disabled: false
      },
      {
        title: 'Teléfono',
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
        title="Información del desarrollador"
      >
        {this.data.map(this._renderField)}
      </FormContainer>
    )
  }
}
