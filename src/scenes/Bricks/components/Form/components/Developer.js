// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Internalization
import { withNamespaces } from 'react-i18next'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import FormContainer from 'components/forms/Container'
import FormField from 'components/forms/Field'

// Actions
import { updateFieldByName } from 'scenes/Bricks/components/Form/redux/actions'

class Developer extends BaseComponent {
  constructor(props) {
    super(props)
    this._bind('_handleFieldChange')
  }

  _handleFieldChange(e) {
    const { name, value } = e.target
    this.props.updateField(name, value, 'owner')
  }

  render() {
    const { t, errors } = this.props
    const { company_id, email, name, phone } = this.props.owner.toJS()
    return (
      <FormContainer title={t('Developer info')}>
        <div className="BricksFormCointaine">
          <FormField
            name="name"
            onChange={this._handleFieldChange}
            title={t('Developer name')}
            value={name}
            errors={errors['owner.name']}
          />
          <FormField
            disabled
            name="company_id"
            onChange={this._handleFieldChange}
            title={t('Company id')}
            value={company_id}
            errors={errors['owner.company_id']}
          />
          <FormField
            name="email"
            onChange={this._handleFieldChange}
            title={t('Email')}
            value={email}
            errors={errors['owner.email']}
          />
          <FormField
            name="phone"
            onChange={this._handleFieldChange}
            title={t('Phone')}
            value={phone}
            errors={errors['owner.phone']}
          />
        </div>
      </FormContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    owner: state.sceneBricksComponentsForm.get('owner')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateField: (name, value, group) =>
      dispatch(updateFieldByName(name, value, group))
  }
}
export default withNamespaces()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Developer)
)
