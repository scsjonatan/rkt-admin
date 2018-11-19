// Dependencies
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import Developer from './components/Developer'
import Contact from './components/Contact'
import Development from './components/Development'
import Location from './components/Location'
import Images from './components/Images'
import Brochure from './components/Brochure'
import General from './components/General'

import Button from 'components/atoms/Button'

// Services
import { searchBricksDataById } from 'services/bricks'

// Actions
import { fetchBrickData } from './redux/actions'

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
    const { t } = this.props
    return (
      <div className="BricksForm">
        <Developer />
        <Contact />
        <Development />
        <Location />
        <Images />
        <Brochure />
        <General />
        <div className="BricksForm__Controls">
          <div className="BricksForm__Controls__Save">
            <Button action={this._handleSave} label={t('Save Continue')} />
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

export default withNamespaces()(
  connect(
    null,
    dispatchStateToProps
  )(BricksForm)
)
