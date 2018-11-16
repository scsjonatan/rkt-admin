// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import FormField from 'components/forms/Field'
import FormNumberField from 'components/forms/NumberField'
import FormSelect from 'components/forms/Select'

export default class RowModel extends BaseComponent {
  constructor(props) {
    super(props)

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
    return (
      <div className="EditUnitsBricks__Content__Row">
        <FormField
          name="model"
          onChange={this._handleFieldChange}
          title="Modelo"
          placeholder="Nombre del modelo"
          value=""
        />
        <FormNumberField
          name="price"
          onChange={this._handleFieldChange}
          title="Precio"
          placeholder="1000000"
          value=""
        />
        <FormSelect options={this.state.options.type} title="Tipo de Unidad" />
        <FormSelect options={this.state.options.unit} title="Estatus" />
      </div>
    )
  }
}
