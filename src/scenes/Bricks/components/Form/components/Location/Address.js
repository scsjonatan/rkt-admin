// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Component
import FormSelect from 'components/forms/Select'

// Services
import {
  fetchStateList,
  fetchMunicipalitiesListByState,
  fetchAreasListByMunicipability
} from 'services/locations'

// Actions
import { updateFieldByName } from 'scenes/Bricks/components/Form/actions'

class Address extends BaseComponent {
  constructor() {
    super()

    this.state = {
      states: [],
      municipalites: [],
      areas: []
    }

    this._bind('_handleChange')
  }

  componentDidMount() {
    this._fetchData(fetchStateList, 'states')
  }

  _handleChange(name, value) {
    if (name === 'state' && value) {
      this._fetchData(fetchMunicipalitiesListByState, 'municipalites', value)
    }

    if (name === 'municipality' && value) {
      this._fetchData(fetchAreasListByMunicipability, 'areas', value)
    }
    this.props.updateField(name, value, 'location')
  }

  _fetchData(service, field, value = '') {
    service(value).then(res => this.setState({ [field]: res }))
  }

  render() {
    const { state, municipality } = this.props.location.toJS()
    return [
      <FormSelect
        key="location-form-state"
        name="state"
        onChange={this._handleChange}
        options={this.state.states}
        title="Estado"
      />,
      <FormSelect
        disabled={!state}
        key="location-form-municipality"
        name="municipality"
        onChange={this._handleChange}
        options={this.state.municipalites}
        title="Municipio"
      />,
      <FormSelect
        disabled={!municipality}
        key="location-form-area"
        name="area"
        onChange={this._handleChange}
        options={this.state.areas}
        title="Colonia"
      />
    ]
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
)(Address)
