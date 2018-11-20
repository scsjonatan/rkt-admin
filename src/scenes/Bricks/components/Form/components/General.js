// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'
import uuid from 'utils/uuid'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import FormContainer from 'components/forms/Container'
import FormCheckbox from 'components/forms/Checkbox'

// Actions
import { updateCheckboxByName } from 'scenes/Bricks/components/Form/redux/actions'

class General extends BaseComponent {
  constructor() {
    super()

    this._bind('_renderCheckbox', '_handleChange')
  }

  _handleChange(e) {
    const { name, checked } = e.target
    this.props.updateCheckbox(name, checked)
  }

  _renderCheckbox(name) {
    const fields = this.props.general.toJS()
    const { label, checked } = fields[name]
    return (
      <FormCheckbox
        name={name}
        checked={checked}
        key={uuid()}
        onChange={this._handleChange}
        title={label}
      />
    )
  }

  render() {
    const fields = this.props.general.toJS()
    // TODO: Set all general features list
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

const mapStateToProps = state => {
  return {
    general: state.sceneBricksComponentsForm.get('general')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCheckbox: (name, checked) =>
      dispatch(updateCheckboxByName(name, checked))
  }
}

export default withNamespaces()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(General)
)
