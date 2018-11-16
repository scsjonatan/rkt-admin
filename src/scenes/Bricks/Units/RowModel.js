// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import FormField from 'components/forms/Field'
import FormNumberField from 'components/forms/NumberField'
import FormSelect from 'components/forms/Select'

// Actions
import { updateValueByField } from 'scenes/Bricks/Units/actions'

class RowModel extends BaseComponent {
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

    this._bind('_handleFieldChange')
  }

  _handleFieldChange(e) {
    e.preventDefault()
    const { name, value } = e.target
    this.props.updateField(name, value)
  }

  render() {
    return (
      <div className="EditUnitsBricks__Content__Row">
        <FormField
          name="model"
          onChange={this._handleFieldChange}
          title="Modelo"
          placeholder="Nombre del modelo"
          value={this.props.model}
        />
        <FormNumberField
          name="price"
          onChange={this._handleFieldChange}
          title="Precio"
          placeholder="1000000"
          value={this.props.price}
        />
        <FormSelect options={this.state.options.type} title="Tipo de Unidad" />
        <FormSelect options={this.state.options.unit} title="Estatus" />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    model: state.sceneBricksUnits.get('model'),
    price: state.sceneBricksUnits.get('price')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateField: (field, value) => dispatch(updateValueByField(field, value))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RowModel)
