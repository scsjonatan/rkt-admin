// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Header from 'components/views/Header'

export default class CreateBrick extends BaseComponent {
  render() {
    return (
      <div className="SceneBricksCreate">
        <Header title="Crear nuevo desarrollo" />
      </div>
    )
  }
}
