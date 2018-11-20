// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import FormField from 'components/forms/Field'
import FormNumberField from 'components/forms/NumberField'
import FormSelect from 'components/forms/Select'

// Costants
import { TYPES, STATUS } from 'constants/units'

// Actions
import { updateValueByField } from 'scenes/Bricks/Units/redux/actions'

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
    const { t, errors, unit_type, status } = this.props
    let typeOption = TYPES[0]
    let statusOption = STATUS[0]
    if (unit_type) {
      typeOption = TYPES[unit_type - 1]
    }
    if (status) {
      statusOption = STATUS[status - 1]
    }

    return (
      <div className="EditUnitsBricks__Content__Row">
        <FormField
          name="model"
          onChange={this._handleFieldChange}
          title={t('Model')}
          placeholder={t('Model name')}
          value={this.props.model}
          errors={errors.model}
        />
        <FormNumberField
          name="price"
          onChange={this._handleFieldChange}
          title={t('Price')}
          placeholder="1000000"
          value={this.props.price}
          errors={errors.price}
        />
        <FormSelect
          options={TYPES}
          title={t('Unit type')}
          name="unit_type"
          onChange={this._handleSelectChange}
          errors={errors.unit_type}
          value={typeOption}
        />
        <FormSelect
          options={STATUS}
          title={t('Status')}
          name="status"
          onChange={this._handleSelectChange}
          errors={errors.status}
          value={statusOption}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    model: state.sceneBricksUnits.get('model'),
    price: state.sceneBricksUnits.get('price'),
    unit_type: state.sceneBricksUnits.get('unit_type'),
    status: state.sceneBricksUnits.get('status')
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
  )(RowModel)
)
