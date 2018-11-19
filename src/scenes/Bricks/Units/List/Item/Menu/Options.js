// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'
import onClickOutside from 'react-onclickoutside'

// Internalization
import { withNamespaces } from 'react-i18next'

// Actions
import { setCompleteUnitData } from 'scenes/Bricks/Units/redux/actions'

// Routes
import { reverse } from 'routes'

class Options extends BaseComponent {
  constructor() {
    super()

    this._bind('_handleEditClick')
  }

  handleClickOutside() {
    this.props.handleOutside()
  }

  _handleEditClick() {
    const { id, brickId } = this.props
    const path = reverse('bricks:units:edit', {
      id: brickId,
      unit_id: id
    })

    this.props.setUnitData({
      id: this.props.id,
      baths: this.props.baths,
      field_surface: this.props.field,
      image: this.props.image,
      title: this.props.name,
      parking: this.props.parking,
      price: this.props.price,
      rooms: this.props.rooms,
      build_surface: this.props.surface,
      type: this.props.type,
      description: '',
      model: this.props.name
    })
    this.context.router.history.push(path)
  }

  render() {
    const { t } = this.props
    return (
      <div className="BricksMenuOptions">
        <ul className="GeneralContainerSmall">
          <li onClick={this._handleEditClick}>{t('Edit unit')}</li>
          <a href="#">{t('Delete unit')}</a>
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUnitData: (field, value) => dispatch(setCompleteUnitData(field, value))
  }
}

export default withNamespaces()(
  connect(
    null,
    mapDispatchToProps
  )(onClickOutside(Options))
)

Options.propTypes = {
  id: PropTypes.string.isRequired,
  brickId: PropTypes.string.isRequired,
  baths: PropTypes.number.isRequired,
  field: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  parking: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  rooms: PropTypes.number.isRequired,
  surface: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
}

Options.contextTypes = {
  router: PropTypes.object.isRequired
}
