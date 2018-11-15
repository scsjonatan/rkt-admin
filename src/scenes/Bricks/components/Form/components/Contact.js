// Dependencies
import React from 'react'
import { connect } from 'react-redux'

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
    const {
      email,
      phone
    } = this.props.contact.toJS()
    return (
      <FormContainer title="Información de contacto del desarrollo">
        <div className="BricksFormCointaine">
          <FormField
            name="email"
            onChange={this._handleFieldChange}
            title="Email del contacto"
            value={email}
          />
          <FormField
            name="phone"
            onChange={this._handleFieldChange}
            title="Teléfono del contacto"
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
    updateField: (name, value, group) => dispatch(updateFieldByName(name, value, group))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
