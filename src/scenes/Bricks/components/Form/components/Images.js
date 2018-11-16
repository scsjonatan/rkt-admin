// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import FormImages from 'components/forms/Images'

// Components
import FormContainer from 'components/forms/Container'

export default class Images extends BaseComponent {
  render() {
    return (
      <FormContainer title="Images">
        <FormImages limit={20} title="Sube hasta 20 Imágenes" />
      </FormContainer>
    )
  }
}
