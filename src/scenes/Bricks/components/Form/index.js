// Dependencies
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Owner from './components/Owner'
import Contact from './components/Contact'
import Growth from './components/Growth'
import Location from './components/Location'
import Images from './components/Images'
import Brochure from './components/Brochure'
import General from './components/General'

import Button from 'components/atoms/Button'

// Services
import { searchBricksDataById } from 'services/bricks'

// Actions
import { fetchBrickData } from './actions'

// Styles
import './styles.scss'

class BricksForm extends BaseComponent {
  constructor() {
    super()

    this._bind('_handleSave')
  }

  componentDidMount() {
    if (this.props.isEdit) {
      this._fetchData()
    }
  }

  // Fake Fetch data
  _fetchData() {
    const brickId = this.context.router.route.match.params.id
    searchBricksDataById(brickId).then(brick => {
      this.props.fetchData(brick)
    })
  }

  _handleSave(e) {
    e.preventDefault()
    if (this.props.isEdit) {
      console.log('Editado')
    } else {
      console.log('Guardar Nuevo')
    }
  }

  render() {
    return (
      <div className="BricksForm">
        <Owner />
        <Contact />
        <Growth />
        <Location />
        <Images />
        <Brochure />
        <General />
        <div className="BricksForm__Controls">
          <div className="BricksForm__Controls__Save">
            <Button action={this._handleSave} label="Guardar y Continuar" />
          </div>
        </div>
      </div>
    )
  }
}

BricksForm.contextTypes = {
  router: PropTypes.object.isRequired
}

const dispatchStateToProps = dispatch => {
  return {
    fetchData: data => dispatch(fetchBrickData(data))
  }
}

export default connect(
  null,
  dispatchStateToProps
)(BricksForm)
