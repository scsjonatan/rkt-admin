// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import FormImages from 'components/forms/Images'

// Components
import FormContainer from 'components/forms/Container'

class Images extends BaseComponent {
  render() {
    const { t } = this.props
    return (
      <FormContainer title={t('Images')}>
        <FormImages limit={20} title={t('Images Max 20')} />
      </FormContainer>
    )
  }
}

export default withNamespaces()(Images)
