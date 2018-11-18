// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import FormSelect from 'components/forms/Select'
import FormArea from 'components/forms/Area'

// Constants
import { TYPES, PHASES, DELIVERIES, YEARS } from 'constants/development'

// Actions
import { updateFieldByName } from 'scenes/Bricks/components/Form/actions'

class Deliver extends BaseComponent {
  constructor() {
    super()

    this._bind('_handleFieldChange', '_handleSelectChange')
  }

  _handleFieldChange(e) {
    const { name, value } = e.target
    this.props.updateField(name, value, 'development')
  }

  _handleSelectChange(name, value) {
    this.props.updateField(name, value, 'development')
  }

  render() {
    const { description } = this.props.development.toJS()
    return [
      <FormSelect
        key="bricks-form-develop-unit-type"
        name="unit_type"
        options={TYPES}
        title="Tipo de Unidad"
        onChange={this._handleSelectChange}
      />,
      <FormArea
        key="bricks-form-develop-description"
        name="description"
        title="Descripción del proyecto"
        value={description}
        onChange={this._handleFieldChange}
      />,
      <FormSelect
        key="bricks-form-develop-phase"
        name="phase"
        options={PHASES}
        title="Etapa de desarrollo"
        onChange={this._handleSelectChange}
      />,
      <FormSelect
        key="bricks-form-develop-delivery"
        name="delivery"
        options={DELIVERIES}
        title="Entrega"
        onChange={this._handleSelectChange}
      />,
      <FormSelect
        key="bricks-form-develop-year"
        name="year"
        options={YEARS}
        title="Año"
        onChange={this._handleSelectChange}
      />
    ]
  }
}

const mapStateToProps = state => {
  return {
    development: state.sceneBricksComponentsForm.get('development')
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
)(Deliver)
