// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Header from 'components/views/Header'

import BrickForm from 'scenes/Bricks/components/Form'

// Styles
import './styles.scss'

export default class EditBrick extends BaseComponent {
  render() {
    return (
      <div className="SceneBricksEdit">
        <Header title="Editar desarrollo" />
        <div className="SceneBricksEdit__Content">
          <BrickForm isEdit />
        </div>
      </div>
    )
  }
}
