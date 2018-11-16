// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import FormField from 'components/forms/Field'
import FormSelect from 'components/forms/Select'

// Actions
import { updateValueByField } from 'scenes/Bricks/Units/actions'

class RowRooms extends BaseComponent {
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
        <FormSelect options={this.state.options.type} title="Habitaciones" />
        <FormSelect options={this.state.options.unit} title="Baños" />
        <FormSelect
          options={this.state.options.type}
          title="Estacionamientos"
        />
        <FormField
          name="build_surface"
          onChange={this._handleFieldChange}
          title="Superficie construida"
          placeholder="0"
          value={this.props.build_surface}
        />
        <FormField
          name="field_surface"
          onChange={this._handleFieldChange}
          title="Superficie terreno"
          placeholder="0"
          value={this.props.field_surface}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    build_surface: state.sceneBricksUnits.get('build_surface'),
    field_surface: state.sceneBricksUnits.get('field_surface')
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
)(RowRooms)
