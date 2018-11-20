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
import Content from './Content'

// Actions
import { setCompleteUnitData } from './redux/actions'

// Services
import { fetchUnitDataById } from 'services/units'

// Styles
import './styles.scss'

class EditUnitsBricks extends BaseComponent {
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

  render() {
    const { t } = this.props
    return (
      <div className="EditUnitsBricks">
        <Header title={t('Edit units')} />
        <Content />
      </div>
    )
  }
}

EditUnitsBricks.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    id: state.sceneBricksUnits.get('id')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUnitData: data => dispatch(setCompleteUnitData(data))
  }
}

export default withNamespaces()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditUnitsBricks)
)
