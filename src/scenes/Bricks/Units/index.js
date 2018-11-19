// Dependencies
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import Header from 'components/views/Header'
import FormContainer from 'components/forms/Container'
import FormField from 'components/forms/Field'
import FormArea from 'components/forms/Area'
import Button from 'components/atoms/Button'
import FormImages from 'components/forms/Images'

import RowModel from './RowModel'
import RowRooms from './RowRooms'
import List from './List'

// Actions
import { updateValueByField, setCompleteUnitData } from './redux/actions'

// Services
import { fetchUnitDataById } from 'services/units'

// Styles
import './styles.scss'

class EditUnitsBricks extends BaseComponent {
  constructor() {
    super()

    this._bind('_handleFieldChange')
  }

  componentDidMount() {
    const paramId = this.context.router.route.match.params.unit_id
    if (!this.props.id) {
      if (paramId) {
        // Fake fetch by param id
        fetchUnitDataById(paramId).then(unit => {
          this.props.setUnitData(unit)
        })
      }
    }
  }

  _handleSave(e) {
    e.preventDefault()
    console.log('Save')
  }

  _handleFieldChange(e) {
    e.preventDefault()
    const { name, value } = e.target
    this.props.updateField(name, value)
  }

  _renderList() {
    const paramId = this.context.router.route.match.params.unit_id
    return paramId ? null : <List />
  }

  render() {
    const { t } = this.props
    return (
      <div className="EditUnitsBricks">
        <Header title="Editar unidades" />
        <div className="EditUnitsBricks__Content">
          <FormContainer title={t('Add unit')}>
            <FormField
              className="EditUnitsBricks__Content__Title"
              name="title"
              onChange={this._handleFieldChange}
              title={t('Unit title')}
              placeholder={t('Write title')}
              value={this.props.title}
            />
            <RowModel />
            <RowRooms />
            <FormArea
              name="description"
              placeholder={t('Describe unit')}
              title="Description"
              onChange={this._handleFieldChange}
              value={this.props.description}
            />
            <FormImages limit={6} title={t('Images')} />
          </FormContainer>
          <div className="EditUnitsBricks__Content__Controls">
            <Button action={this._handleSave} label={t('Add unit')} />
          </div>
          {this._renderList()}
        </div>
      </div>
    )
  }
}

EditUnitsBricks.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    title: state.sceneBricksUnits.get('title'),
    id: state.sceneBricksUnits.get('id'),
    description: state.sceneBricksUnits.get('description')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUnitData: data => dispatch(setCompleteUnitData(data)),
    updateField: (field, value) => dispatch(updateValueByField(field, value))
  }
}

export default withNamespaces()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditUnitsBricks)
)
