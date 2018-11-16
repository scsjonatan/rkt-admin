// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import FileUploader from 'components/forms/FileUploader'

// Components
import FormContainer from 'components/forms/Container'

class Brochure extends BaseComponent {
  _handleFile(file) {
    console.log(file)
  }
  render() {
    return (
      <FormContainer title="Brochure">
        <FileUploader
          title="Formato PDF"
          onChange={this._handleFile}
        />
      </FormContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    owner: state.sceneBricksComponentsForm.get('owner')
  }
}

export default connect(mapStateToProps)(Brochure)
