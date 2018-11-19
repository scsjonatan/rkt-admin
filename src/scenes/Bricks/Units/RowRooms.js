// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Internalization
import { withNamespaces } from 'react-i18next'

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
    const { t } = this.props
    return (
      <div className="EditUnitsBricks__Content__Row">
        <div className="EditUnitsBricks__Content__Row__RoomChild">
          <FormNumberField
            name="rooms"
            onChange={this._handleFieldChange}
            title={t('Rooms')}
            placeholder={t('Rooms number')}
            value={this.props.rooms}
          />
        </div>
        <div className="EditUnitsBricks__Content__Row__RoomChild">
          <FormNumberField
            name="baths"
            onChange={this._handleFieldChange}
            title={t('Baths')}
            placeholder={t('Baths number')}
            value={this.props.baths}
          />
        </div>
        <div className="EditUnitsBricks__Content__Row__RoomChild">
          <FormNumberField
            name="parkings"
            onChange={this._handleFieldChange}
            title={t('Parking')}
            placeholder={t('Parking')}
            value={this.props.parkings}
          />
        </div>
        <div className="EditUnitsBricks__Content__Row__RoomChild">
          <FormNumberField
            name="build_surface"
            onChange={this._handleFieldChange}
            title={t('Build surface')}
            placeholder="0"
            value={this.props.build_surface}
          />
        </div>
        <div className="EditUnitsBricks__Content__Row__RoomChild">
          <FormNumberField
            name="field_surface"
            onChange={this._handleFieldChange}
            title={t('Field surface')}
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

export default withNamespaces()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RowRooms)
)
