// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'
import { renderCheckbox } from '../utils/RenderComponents'

// Components
import FormContainer from 'components/forms/Container'

export default class General extends BaseComponent {
  constructor() {
    super()

    this._bind('_renderCheckbox', '_handleChange')
  }

  _handleChange(e) {
    const {
      name,
      checked
    } = e.target

    this.props.handleCheckboxChange(name, checked)
  }

  _renderCheckbox(name) {
    const fields = this.props.fields
    const { label, checked } = fields[name]
    return renderCheckbox(name, label, checked, this._handleChange)
  }

  render() {
    const fields = this.props.fields
    return (
      <FormContainer title="Características generales">
        <div className="BricksEditGeneral">
          <div className="BricksEditGeneral__Column">
            {Object.keys(fields).map(this._renderCheckbox)}
          </div>
        </div>
      </FormContainer>
    )
  }
}
