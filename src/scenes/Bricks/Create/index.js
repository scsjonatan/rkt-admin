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

class CreateBrick extends BaseComponent {
  render() {
    const { t } = this.props
    return (
      <div className="SceneBricksCreate">
        <Header title={t('Create Development')} />
        <div className="SceneBricksCreate__Content">
          <BrickForm />
        </div>
      </div>
    )
  }
}

export default withNamespaces()(CreateBrick)
