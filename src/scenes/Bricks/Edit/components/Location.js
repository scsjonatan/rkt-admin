// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

import { renderSelect } from './utils/RenderComponents'

// Components
import FormContainer from 'components/forms/Container'
import FormField from 'components/forms/Field'

// Actions
import { updateFieldByName } from 'scenes/Bricks/Edit/actions'

class Location extends BaseComponent {
  constructor(props) {
    super(props)
    this.state = {
      options: {
        state: [
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' }
        ]
      }
    }

    this._bind('_handleFieldChange')
  }

  _handleFieldChange(e) {
    const { name, value } = e.target
    this.props.updateField(name, value, 'location')
  }

  render() {
    const {
      cp,
      direction,
      latitude,
      longitude
    } = this.props.location.toJS()
    const options = this.state.options
    return (
      <FormContainer title="Ubicación del desarrollo">
        <FormField
          name="direction"
          onChange={this._handleFieldChange}
          title="Dirección"
          value={direction}
        />
        {renderSelect('Estado', options.state)}
        {renderSelect('Municipio', options.state)}
        {renderSelect('Colonia', options.state)}
        <FormField
          name="cp"
          onChange={this._handleFieldChange}
          title="Código postal"
          value={cp}
        />
        {renderSelect('Ubicación en mapa', options.state)}
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
      </FormContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    location: state.sceneBricksEdit.get('location')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateField: (name, value, group) => dispatch(updateFieldByName(name, value, group))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Location)
