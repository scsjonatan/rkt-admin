// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import FormContainer from 'components/forms/Container'
import FormField from 'components/forms/Field'
import FormSelect from 'components/forms/Select'
import Address from './Address'

// Actions
import { updateFieldByName } from 'scenes/Bricks/components/Form/redux/actions'

// Constants
import { LOCATION_RESTRICTIONS } from 'constants/development'

class Location extends BaseComponent {
  constructor(props) {
    super(props)

    this._bind('_handleFieldChange', '_handleRestriction')
  }

  _handleFieldChange(e) {
    const { name, value } = e.target
    this.props.updateField(name, value, 'location')
  }

  _handleRestriction(name, value) {
    this.props.updateField(name, value, 'location')
  }

  render() {
    const { t, errors } = this.props
    const { cp, address, latitude, longitude } = this.props.location.toJS()
    return (
      <FormContainer title={t('Develop location')}>
        <div className="BricksFormCointaine">
          <FormField
            name="address"
            onChange={this._handleFieldChange}
            title={t('Address')}
            value={address}
            errors={errors['location.address']}
          />
          <Address errors={errors} />
          <FormField
            name="cp"
            onChange={this._handleFieldChange}
            title={t('Postal Code')}
            value={cp}
            errors={errors['location.cp']}
          />
          <FormSelect
            options={LOCATION_RESTRICTIONS}
            title={t('Map location')}
            onChange={this._handleRestriction}
            name="restriction"
            errors={errors['location.restriction']}
          />
          <FormField
            name="latitude"
            onChange={this._handleFieldChange}
            title={t('Latitude')}
            value={latitude}
            errors={errors['location.latitude']}
          />
          <FormField
            name="longitude"
            onChange={this._handleFieldChange}
            title={t('Longitude')}
            value={longitude}
            errors={errors['location.longitude']}
          />
        </div>
      </FormContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    location: state.sceneBricksComponentsForm.get('location')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateField: (name, value, group) =>
      dispatch(updateFieldByName(name, value, group))
  }
}

export default withNamespaces()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Location)
)
