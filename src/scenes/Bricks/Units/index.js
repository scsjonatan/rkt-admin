// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Header from 'components/views/Header'
import FormContainer from 'components/forms/Container'
import FormField from 'components/forms/Field'
import FormArea from 'components/forms/Area'

import RowModel from './RowModel'
import RowRooms from './RowRooms'
import List from './components/List'

// Styles
import './styles.scss'

export default class EditUnitsBricks extends BaseComponent {
  render() {
    return (
      <div className="EditUnitsBricks">
        <Header title="Editar unidades" />
        <div className="EditUnitsBricks__Content">
          <FormContainer title="Agregar Unidad">
            <FormField
              className="EditUnitsBricks__Content__Title"
              name="unit"
              onChange={this._handleFieldChange}
              title="Titulo de la unidad"
              placeholder="Escribe el título que aparecerá en la vista de la unidad"
              value=""
            />
            <RowModel />
            <RowRooms />
            <FormArea
              placeholder="Describe las características de la unidad"
              title="Description"
              value=""
            />
          </FormContainer>
          <List />
        </div>
      </div>
    )
  }
}
