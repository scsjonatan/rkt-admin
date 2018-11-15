// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import FormContainer from 'components/forms/Container'

class Brochure extends BaseComponent {
  render() {
    return (
      <FormContainer title="Brochure">
        Brochure
      </FormContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    owner: state.sceneBricksEdit.get('owner')
  }
}

export default connect(mapStateToProps)(Brochure)
