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
import { updateFieldByName } from 'scenes/Bricks/components/Form/actions'

class Contact extends BaseComponent {
  constructor(props) {
    super(props)

    this._bind('_handleFieldChange')
  }

  _handleFieldChange(e) {
    const { name, value } = e.target
    this.props.updateField(name, value, 'contact')
  }

  render() {
    const { t } = this.props
    const { email, phone } = this.props.contact.toJS()
    return (
      <FormContainer title={t('Contact info')}>
        <div className="BricksFormCointaine">
          <FormField
            name="email"
            onChange={this._handleFieldChange}
            title={t('Contact email')}
            value={email}
          />
          <FormField
            name="phone"
            onChange={this._handleFieldChange}
            title={t('Phone email')}
            value={phone}
          />
        </div>
      </FormContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    contact: state.sceneBricksComponentsForm.get('contact')
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
  )(Contact)
)
