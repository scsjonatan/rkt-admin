// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import FormContainer from 'components/forms/Container'

// Utils
import { renderField, renderSelect } from './utils/RenderComponents'

export default class Location extends BaseComponent {
  constructor() {
    super()

    this.state = {
      options: {
        state: [
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' }
        ]
      }
    }
  }

  render() {
    const {
      cp,
      direction,
      latitude,
      longitude
    } = this.props
    const options = this.state.options
    return (
      <FormContainer title="Ubicación del desarrollo">
        {renderField('Dirección', direction)}
        {renderSelect('Estado', options.state)}
        {renderSelect('Municipio', options.state)}
        {renderSelect('Colonia', options.state)}
        {renderField('Código postal', cp)}
        {renderSelect('Ubicación en mapa', options.state)}
        {renderField('Map Lat', latitude)}
        {renderField('Map Long', longitude)}
      </FormContainer>
    )
  }
}
