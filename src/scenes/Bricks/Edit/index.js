// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import Header from 'components/views/Header'

import BrickForm from 'scenes/Bricks/components/Form'

// Styles
import './styles.scss'

class EditBrick extends BaseComponent {
  render() {
    const { t } = this.props
    return (
      <div className="SceneBricksEdit">
        <Header title={t('Edit Development')} />
        <div className="SceneBricksEdit__Content">
          <BrickForm isEdit />
        </div>
      </div>
    )
  }
}

export default withNamespaces()(EditBrick)
