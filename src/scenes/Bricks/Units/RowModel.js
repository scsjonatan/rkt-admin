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
    const { t } = this.props
    return (
      <div className="EditUnitsBricks__Content__Row">
        <FormField
          name="model"
          onChange={this._handleFieldChange}
          title={t('Model')}
          placeholder={t('Model name')}
          value={this.props.model}
        />
        <FormNumberField
          name="price"
          onChange={this._handleFieldChange}
          title={t('Price')}
          placeholder="1000000"
          value={this.props.price}
        />
        <FormSelect
          options={TYPES}
          title={t('Unit type')}
          name="unit_type"
          onChange={this._handleSelectChange}
        />
        <FormSelect
          options={STATUS}
          title={t('Status')}
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

export default withNamespaces()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RowModel)
)
