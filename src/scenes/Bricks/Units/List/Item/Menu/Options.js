// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'
import onClickOutside from 'react-onclickoutside'

// Components
import { Link } from 'react-router-dom'

// Routes
import { reverse } from 'routes'

class Options extends BaseComponent {
  handleClickOutside() {
    this.props.handleOutside()
  }

  render() {
    const { unitId, brickId } = this.props
    const editPath = reverse('bricks:units:edit', {
      id: brickId,
      unit_id: unitId
    })
    return (
      <div className="BricksMenuOptions">
        <ul className="GeneralContainerSmall">
          <Link to={editPath}>Editar Unidad</Link>
          <a href="#">Eliminar Desarrollo</a>
        </ul>
      </div>
    )
  }
}

export default onClickOutside(Options)

Options.propTypes = {
  unitId: PropTypes.string.isRequired,
  brickId: PropTypes.string.isRequired
}
