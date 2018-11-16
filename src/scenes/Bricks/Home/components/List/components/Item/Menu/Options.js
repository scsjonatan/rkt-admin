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
    const { id } = this.props
    return (
      <div className="BricksMenuOptions">
        <ul className="GeneralContainerSmall">
          <Link to={reverse('bricks:edit', { id })}>Editar Desarrollo</Link>
          <Link to={reverse('bricks:units', { id })}>Editar Unidades</Link>
          <a href="#">Eliminar Desarrollo</a>
        </ul>
      </div>
    )
  }
}

Options.propTypes = {
  id: PropTypes.string.isRequired
}

export default onClickOutside(Options)
