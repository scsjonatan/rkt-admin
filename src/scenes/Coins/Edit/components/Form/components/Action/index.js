// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import ReactSVG from 'react-svg'
import Options from './Options'

// Styles
import './styles.scss'

export default class Action extends BaseComponent {
  constructor() {
    super()

    this.state = {
      isVisible: false,
      label: 'Action'
    }

    this._bind('_toggleMenu', '_handleClickOutside', '_handleRemove', '_handleAdd')
  }

  _toggleMenu() {
    this.setState(prevState => {
      return {
        isVisible: !prevState.isVisible
      }
    })
  }

  _handleClickOutside() {
    this.setState({ isVisible: false })
  }

  _handleAdd() {
    this.setState({ label: 'Agregar' })
    this.props.handleAction('add')
  }

  _handleRemove() {
    this.setState({ label: 'Quitar' })
    this.props.handleAction('remove')
  }

  _renderMenu() {
    return this.state.isVisible ? (
      <Options
        handleAdd={this._handleAdd}
        handleRemove={this._handleRemove}
        handleOutside={this._handleClickOutside}/>
    ) : null
  }

  render() {
    const activeClass = this.state.label !== 'Action' ? 'Active' : ''
    return (
      <div className="CoinsFormAction" onClick={this._toggleMenu}>
        <p className={activeClass}>{this.state.label}</p>
        <ReactSVG src={require('./add.svg')} />
        {this._renderMenu()}
      </div>
    )
  }
}
