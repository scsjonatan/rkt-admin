// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import FormContainer from 'components/forms/Container'
import FormField from 'components/forms/Field'

// Utils
import { renderSelect, renderArea } from './utils/RenderComponents'

// Actions
import { updateFieldByName } from 'scenes/Bricks/components/Form/actions'

class Growth extends BaseComponent {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        type: [
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' }
        ],
        unit: [
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' }
        ]
      }
    }
    this._bind('_handleFieldChange')
  }

  _handleFieldChange(e) {
    const { name, value } = e.target
    this.props.updateField(name, value, 'growth')
  }

  render() {
    const {
      description,
      external_key,
      internal_key,
      name
    } = this.props.growth.toJS()
    const options = this.state.options

    return (
      <FormContainer title="Información del desarrollo">
        <div className="BricksFormCointaine">
          <FormField
            name="name"
            onChange={this._handleFieldChange}
            title="Nombre del proyecto"
            value={name}
          />
          {renderSelect('Tipo de Unidad', options.unit)}
          {renderArea('Descripción del proyecto', description, 'description')}
          {renderSelect('Etapa de desarrollo', options.unit)}
          {renderSelect('Entrega', options.unit)}
          {renderSelect('Año', options.unit)}
          <FormField
            name="external_key"
            onChange={this._handleFieldChange}
            title="Clave externa"
            value={external_key}
          />
          <FormField
            name="internal_key"
            onChange={this._handleFieldChange}
            title="Clave interna"
            value={internal_key}
          />
        </div>
      </FormContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    growth: state.sceneBricksComponentsForm.get('growth')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateField: (name, value, group) =>
      dispatch(updateFieldByName(name, value, group))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Growth)
