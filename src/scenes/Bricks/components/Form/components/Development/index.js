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
import Deliver from './Deliver'

// Actions
import { updateFieldByName } from 'scenes/Bricks/components/Form/redux/actions'

class Development extends BaseComponent {
  constructor(props) {
    super(props)
    this._bind('_handleFieldChange')
  }

  _handleFieldChange(e) {
    const { name, value } = e.target
    this.props.updateField(name, value, 'development')
  }

  render() {
    const { t } = this.props
    const { external_key, internal_key, name } = this.props.development.toJS()

    return (
      <FormContainer title="Información del desarrollo">
        <div className="BricksFormCointaine">
          <FormField
            name="name"
            onChange={this._handleFieldChange}
            title={t('Proyect name')}
            value={name}
          />
          <Deliver />
          <FormField
            name="external_key"
            onChange={this._handleFieldChange}
            title={t('External key')}
            value={external_key}
          />
          <FormField
            name="internal_key"
            onChange={this._handleFieldChange}
            title={t('Internal key')}
            value={internal_key}
          />
        </div>
      </FormContainer>
    )
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
export default withNamespaces()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Development)
)
