// Dependencies
import React from 'react'

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
    return (
      <div className="BricksMenuOptions">
        <ul className="GeneralContainerSmall">
          <Link to={reverse('bricks:edit')}>Editar Desarrollo</Link>
          <Link to={reverse('bricks:units')}>Editar Unidades</Link>
          <a href="#">Eliminar Desarrollo</a>
        </ul>
      </div>
    )
  }
}

export default onClickOutside(Options)
