// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import FormContainer from 'components/forms/Container'

// Utils
import { renderField } from './utils/RenderComponents'

class Contact extends BaseComponent {
  constructor(props) {
    super(props)

    const {
      email,
      phone
    } = props.contact.toJS()

    this.data = [
      {
        title: 'Email del contacto',
        value: email,
        disabled: false
      },
      {
        title: 'Teléfono del contacto',
        value: phone,
        disabled: false
      }
    ]
  }

  _renderField(field) {
    const {
      disabled,
      value,
      title
    } = field
    return renderField(title, value, disabled)
  }

  render() {
    return (
      <FormContainer
        title="Información de contacto del desarrollo"
      >
        {this.data.map(this._renderField)}
      </FormContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    contact: state.sceneBricksEdit.get('contact')
  }
}

export default connect(mapStateToProps)(Contact)
