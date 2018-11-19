// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import FileUploader from 'components/forms/FileUploader'

// Components
import FormContainer from 'components/forms/Container'

class Brochure extends BaseComponent {
  _handleFile(file) {
    console.log(file)
  }
  render() {
    const { t } = this.props
    return (
      <FormContainer title={t('Brochure')}>
        <FileUploader title={t('PDF format')} onChange={this._handleFile} />
      </FormContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    owner: state.sceneBricksComponentsForm.get('owner')
  }
}

export default withNamespaces()(connect(mapStateToProps)(Brochure))
