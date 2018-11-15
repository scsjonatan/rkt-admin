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


class Owner extends BaseComponent {
  constructor(props) {
    super(props)
    this._bind('_handleFieldChange')
  }

  _handleFieldChange(e) {
    const { name, value } = e.target
    this.props.updateField(name, value, 'owner')
  }

  render() {
    const {
      company_id,
      email,
      name,
      phone
    } = this.props.owner.toJS()

    return (
      <FormContainer title="Información del desarrollador" >
        <FormField
          name="name"
          onChange={this._handleFieldChange}
          title="Nombre del desarrollador"
          value={name}
        />
        <FormField
          disabled
          name="company_id"
          onChange={this._handleFieldChange}
          title="Identificador de compañia"
          value={company_id}
        />
        <FormField
          name="email"
          onChange={this._handleFieldChange}
          title="Email"
          value={email}
        />
        <FormField
          name="phone"
          onChange={this._handleFieldChange}
          title="Phone"
          value={phone}
        />
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
    updateField: (name, value, group) => dispatch(updateFieldByName(name, value, group))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Owner)
