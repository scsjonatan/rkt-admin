// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import FormField from 'components/forms/Field'
import FormNumberField from 'components/forms/NumberField'
import FormSelect from 'components/forms/Select'

// Costants
import { TYPES, STATUS } from 'constants/units'

// Actions
import { updateValueByField } from 'scenes/Bricks/Units/actions'

class RowModel extends BaseComponent {
  constructor(props) {
    super(props)

    this._bind('_handleFieldChange', '_handleSelectChange')
  }

  _handleFieldChange(e) {
    e.preventDefault()
    const { name, value } = e.target
    this.props.updateField(name, value)
  }

  _handleSelectChange(name, value) {
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
        <FormSelect
          options={TYPES}
          title="Tipo de Unidad"
          name="unit_type"
          onChange={this._handleSelectChange}
        />
        <FormSelect
          options={STATUS}
          title="Estatus"
          name="status"
          onChange={this._handleSelectChange}
        />
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
