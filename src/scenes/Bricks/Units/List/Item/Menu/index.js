// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import ReactSVG from 'react-svg'
import Options from './Options'

// Styles
import './styles.scss'

export default class Menu extends BaseComponent {
  constructor() {
    super()

    this.state = {
      isVisible: false
    }

    this._bind('_toggleMenu', '_handleClickOutside')
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

  _renderMenu() {
    const { unitId, brickId } = this.props
    return this.state.isVisible ? (
      <Options
        handleOutside={this._handleClickOutside}
        unitId={unitId}
        brickId={brickId}
      />
    ) : null
  }

  render() {
    return (
      <div className="BricksListItem__MetaData__Menu">
        <div onClick={this._toggleMenu}>
          <ReactSVG src={require('./dots.svg')} />
        </div>
        {this._renderMenu()}
      </div>
    )
  }
}

Menu.propTypes = {
  unitId: PropTypes.string.isRequired,
  brickId: PropTypes.string.isRequired
}
