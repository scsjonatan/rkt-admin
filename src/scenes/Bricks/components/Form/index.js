// Dependencies
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'
import Validator from 'validatorjs'

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

// Others
import { rules, messages } from './validator'

// Styles
import './styles.scss'

class BricksForm extends BaseComponent {
  constructor() {
    super()
    this.state = {
      errors: {}
    }

    this._bind('_handleSave', '_renderErrorMessage')
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
    const data = this.props.data.toJS()
    let validation = new Validator(data, rules, messages)
    if (validation.passes()) {
      if (this.props.isEdit) {
        console.log('Editado', data)
      } else {
        console.log('Guardar Nuevo', data)
      }
    } else {
      this.setState({
        errors: validation.errors.errors
      })
      console.log(validation)
    }
  }

  _renderErrorMessage() {
    const hasErrors = Object.keys(this.state.errors).length
    return hasErrors ? (
      <p className="BricksForm__Controls__Error">
        Corrige los errores antes de continuar
      </p>
    ) : null
  }

  render() {
    const { t } = this.props
    return (
      <div className="BricksForm">
        <Developer errors={this.state.errors} />
        <Contact errors={this.state.errors} />
        <Development errors={this.state.errors} />
        <Location errors={this.state.errors} />
        <Images errors={this.state.errors} />
        <Brochure errors={this.state.errors} />
        <General errors={this.state.errors} />
        <div className="BricksForm__Controls">
          {this._renderErrorMessage()}
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

const mapStateToProps = state => {
  return {
    data: state.sceneBricksComponentsForm
  }
}

const dispatchStateToProps = dispatch => {
  return {
    fetchData: data => dispatch(fetchBrickData(data))
  }
}

export default withNamespaces()(
  connect(
    mapStateToProps,
    dispatchStateToProps
  )(BricksForm)
)
