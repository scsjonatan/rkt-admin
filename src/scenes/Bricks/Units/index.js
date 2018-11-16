// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Header from 'components/views/Header'
import FormContainer from 'components/forms/Container'
import FormField from 'components/forms/Field'
import FormArea from 'components/forms/Area'
import Button from 'components/atoms/Button'
import FormImages from 'components/forms/Images'

import RowModel from './RowModel'
import RowRooms from './RowRooms'
import List from './List'

// Actions
import { updateValueByField } from './actions'

// Styles
import './styles.scss'

class EditUnitsBricks extends BaseComponent {
  constructor() {
    super()

    this._bind('_handleFieldChange')
  }

  _handleSave(e) {
    e.preventDefault()
    console.log('Save')
  }

  _handleFieldChange(e) {
    e.preventDefault()
    const { name, value } = e.target
    this.props.updateField(name, value)
  }

  render() {
    return (
      <div className="EditUnitsBricks">
        <Header title="Editar unidades" />
        <div className="EditUnitsBricks__Content">
          <FormContainer title="Agregar Unidad">
            <FormField
              className="EditUnitsBricks__Content__Title"
              name="title"
              onChange={this._handleFieldChange}
              title="Titulo de la unidad"
              placeholder="Escribe el título que aparecerá en la vista de la unidad"
              value={this.props.title}
            />
            <RowModel />
            <RowRooms />
            <FormArea
              name="description"
              placeholder="Describe las características de la unidad"
              title="Description"
              onChange={this._handleFieldChange}
              value={this.props.description}
            />
            <FormImages limit={6} title="Imágenes" />
          </FormContainer>
          <div className="EditUnitsBricks__Content__Controls">
            <Button action={this._handleSave} label="Agregar unidad" />
          </div>
          <List />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    title: state.sceneBricksUnits.get('title'),
    description: state.sceneBricksUnits.get('description')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateField: (field, value) => dispatch(updateValueByField(field, value))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUnitsBricks)
