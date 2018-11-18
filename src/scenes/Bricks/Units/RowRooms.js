// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import FormNumberField from 'components/forms/NumberField'

// Actions
import { updateValueByField } from 'scenes/Bricks/Units/actions'

class RowRooms extends BaseComponent {
  constructor(props) {
    super(props)

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
        <div className="EditUnitsBricks__Content__Row__RoomChild">
          <FormNumberField
            name="rooms"
            onChange={this._handleFieldChange}
            title="Habitaciones"
            placeholder="Número de habitaciones"
            value={this.props.rooms}
          />
        </div>
        <div className="EditUnitsBricks__Content__Row__RoomChild">
          <FormNumberField
            name="baths"
            onChange={this._handleFieldChange}
            title="Baños"
            placeholder="Número de baños"
            value={this.props.baths}
          />
        </div>
        <div className="EditUnitsBricks__Content__Row__RoomChild">
          <FormNumberField
            name="parkings"
            onChange={this._handleFieldChange}
            title="Estacionamientos"
            placeholder="Estacionamientos"
            value={this.props.parkings}
          />
        </div>
        <div className="EditUnitsBricks__Content__Row__RoomChild">
          <FormNumberField
            name="build_surface"
            onChange={this._handleFieldChange}
            title="Superficie construida"
            placeholder="0"
            value={this.props.build_surface}
          />
        </div>
        <div className="EditUnitsBricks__Content__Row__RoomChild">
          <FormNumberField
            name="field_surface"
            onChange={this._handleFieldChange}
            title="Superficie terreno"
            placeholder="0"
            value={this.props.field_surface}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    build_surface: state.sceneBricksUnits.get('build_surface'),
    field_surface: state.sceneBricksUnits.get('field_surface'),
    rooms: state.sceneBricksUnits.get('rooms'),
    baths: state.sceneBricksUnits.get('baths'),
    parkings: state.sceneBricksUnits.get('parkings')
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
