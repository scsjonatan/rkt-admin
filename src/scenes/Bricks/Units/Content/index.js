// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Internalization
import { withNamespaces } from 'react-i18next'

// Utils
import BaseComponent from 'utils/BaseComponent'
import Validator from 'validatorjs'

// Components
import FormContainer from 'components/forms/Container'
import FormField from 'components/forms/Field'
import FormArea from 'components/forms/Area'
import Button from 'components/atoms/Button'
import FormImages from 'components/forms/Images'

import RowModel from './RowModel'
import RowRooms from './RowRooms'
import List from './List'

// Actions
import { updateValueByField } from 'scenes/Bricks/Units/redux/actions'

// Validation
import { rules, messages } from './validator'

class Content extends BaseComponent {
  constructor() {
    super()
    this.state = {
      errors: []
    }
    this._bind('_handleFieldChange', '_handleSave')
  }

  _handleFieldChange(e) {
    e.preventDefault()
    const { name, value } = e.target
    this.props.updateField(name, value)
  }

  _validateUnitId() {
    const paramId = this.context.router.route.match.params.unit_id
    return paramId ? null : <List />
  }

  _handleSave(e) {
    e.preventDefault()
    const data = this.props.data.toJS()
    let validation = new Validator(data, rules, messages)
    if (validation.passes()) {
      this.setState({ errors: {} })
      console.log('Save')
    } else {
      this.setState({
        errors: validation.errors.errors
      })
    }
  }

  render() {
    const { t } = this.props
    return (
      <div className="EditUnitsBricks__Content">
        <FormContainer title={t('Add unit')}>
          <FormField
            className="EditUnitsBricks__Content__Title"
            name="title"
            onChange={this._handleFieldChange}
            title={t('Unit title')}
            placeholder={t('Write title')}
            value={this.props.title}
            errors={this.state.errors.title}
          />
          <RowModel errors={this.state.errors} />
          <RowRooms errors={this.state.errors} />
          <FormArea
            name="description"
            placeholder={t('Describe unit')}
            title="Description"
            onChange={this._handleFieldChange}
            value={this.props.description}
            errors={this.state.errors.description}
          />
          <FormImages limit={6} title={t('Images')} />
        </FormContainer>
        <div className="EditUnitsBricks__Content__Controls">
          <Button action={this._handleSave} label={t('Add unit')} />
        </div>
        {this._validateUnitId()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    title: state.sceneBricksUnits.get('title'),
    description: state.sceneBricksUnits.get('description'),
    data: state.sceneBricksUnits
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateField: (field, value) => dispatch(updateValueByField(field, value))
  }
}

Content.contextTypes = {
  router: PropTypes.object.isRequired
}

export default withNamespaces()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Content)
)
