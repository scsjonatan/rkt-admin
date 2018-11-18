// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import FormContainer from 'components/forms/Container'
import FormField from 'components/forms/Field'
import FormSelect from 'components/forms/Select'
import Address from './Address'

// Actions
import { updateFieldByName } from 'scenes/Bricks/components/Form/actions'

// Constants
import { LOCATION_RESTRICTIONS } from 'constants/development'

class Location extends BaseComponent {
  constructor(props) {
    super(props)

    this._bind('_handleFieldChange', '_handleRestriction')
  }

  _handleFieldChange(e) {
    const { name, value } = e.target
    this.props.updateField(name, value, 'location')
  }

  _handleRestriction(name, value) {
    this.props.updateField(name, value, 'location')
  }

  render() {
    const { cp, direction, latitude, longitude } = this.props.location.toJS()
    return (
      <FormContainer title="Ubicación del desarrollo">
        <div className="BricksFormCointaine">
          <FormField
            name="direction"
            onChange={this._handleFieldChange}
            title="Dirección"
            value={direction}
          />
          <Address />
          <FormField
            name="cp"
            onChange={this._handleFieldChange}
            title="Código postal"
            value={cp}
          />
          <FormSelect
            options={LOCATION_RESTRICTIONS}
            title="Ubicación en mapa"
            onChange={this._handleRestriction}
            name="restriction"
          />
          <FormField
            name="latitude"
            onChange={this._handleFieldChange}
            title="Map Lat"
            value={latitude}
          />
          <FormField
            name="longitude"
            onChange={this._handleFieldChange}
            title="Map Long"
            value={longitude}
          />
        </div>
      </FormContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    location: state.sceneBricksComponentsForm.get('location')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateField: (name, value, group) =>
      dispatch(updateFieldByName(name, value, group))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Location)
