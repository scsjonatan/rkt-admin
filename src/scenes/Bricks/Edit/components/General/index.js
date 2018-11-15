// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'
import { renderCheckbox } from '../utils/RenderComponents'

// Components
import FormContainer from 'components/forms/Container'

class General extends BaseComponent {
  constructor() {
    super()

    this._bind('_renderCheckbox', '_handleChange')
  }

  _handleChange(e) {
    const {
      name,
      checked
    } = e.target

    console.log(name, checked)
  }

  _renderCheckbox(name) {
    const fields = this.props.general.toJS()
    const { label, checked } = fields[name]
    return renderCheckbox(name, label, checked, this._handleChange)
  }

  render() {
    const fields = this.props.general.toJS()
    return (
      <FormContainer title="Características generales">
        <div className="BricksEditGeneral">
          <div className="BricksEditGeneral__Column">
            {Object.keys(fields).map(this._renderCheckbox)}
          </div>
        </div>
      </FormContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    general: state.sceneBricksEdit.get('general')
  }
}

export default connect(mapStateToProps)(General)
