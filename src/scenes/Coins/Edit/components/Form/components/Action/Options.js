// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'
import onClickOutside from 'react-onclickoutside'

class Options extends BaseComponent {
  handleClickOutside() {
    this.props.handleOutside()
  }

  render() {
    return (
      <div className="CoinsFormActionOptions">
        <ul className="GeneralContainerSmall">
          <li onClick={this.props.handleAdd}>Agregar</li>
          <li onClick={this.props.handleRemove}>Quitar</li>
        </ul>
      </div>
    )
  }
}

export default onClickOutside(Options)
