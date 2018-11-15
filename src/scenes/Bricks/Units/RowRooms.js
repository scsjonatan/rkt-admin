// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import FormField from 'components/forms/Field'
import FormSelect from 'components/forms/Select'

export default class RowRooms extends BaseComponent {
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
        <FormSelect
          options={this.state.options.type}
          title="Habitaciones"
        />
        <FormSelect
          options={this.state.options.unit}
          title="Baños"
        />
        <FormSelect
          options={this.state.options.type}
          title="Estacionamientos"
        />
        <FormField
          name="surface_built"
          onChange={this._handleFieldChange}
          title="Superficie construida"
          placeholder="0"
          value=""
        />
        <FormField
          name="surface_field"
          onChange={this._handleFieldChange}
          title="Superficie terreno"
          placeholder="0"
          value=""
        />
      </div>
    )
  }
}
