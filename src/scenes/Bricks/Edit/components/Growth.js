// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import FormContainer from 'components/forms/Container'


// Utils
import { renderField, renderSelect, renderArea } from './utils/RenderComponents'

export default class Growth extends BaseComponent {
  constructor() {
    super()

    this.state = {
      options: {
        type: [
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' }
        ],
        unit: [
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' }
        ]
      }
    }
  }

  render() {
    const {
      name,
      description,
      internal_key,
      external_key
    } = this.props
    const options = this.state.options

    return (
      <FormContainer title="Información del desarrollo">
        {renderField('Nombre del proyecto', name)}
        {renderSelect('Tipo de Unidad', options.unit)}
        {renderArea('Descripción del proyecto', description)}
        {renderSelect('Etapa de desarrollo', options.unit)}
        {renderSelect('Entrega', options.unit)}
        {renderSelect('Año', options.unit)}
        {renderField('Clave interna', internal_key)}
        {renderField('Clave externa', external_key)}
        {renderField('Paquete ProBroker Desarrollos', external_key)}
      </FormContainer>
    )
  }
}
