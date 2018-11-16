// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import ReactSVG from 'react-svg'

// Styles
import './styles.scss'

export default class SearchBox extends BaseComponent {
  constructor(props) {
    super(props)

    this.state = {
      value: props.startValue
    }

    this._bind('_handleSubmit', '_handleChange')
  }

  _handleSubmit(e) {
    e.preventDefault()
    this.props.action(this.state.value)
  }

  _handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  _renderChildren() {
    const { children } = this.props
    return children ? children : <ReactSVG src={require('./search.svg')} />
  }

  render() {
    const { placeholder, title } = this.props
    return (
      <form
        className="GeneralContainer BricksSearchBox"
        onSubmit={this._handleSubmit}
      >
        <p>{title}</p>
        <div className="BricksSearchBox__Text">
          <input
            onChange={this._handleChange}
            placeholder={placeholder}
            value={this.state.value}
          />
          <div
            className="BricksSearchBox__Text__Icon"
            onClick={this._handleSubmit}
          >
            {this._renderChildren()}
          </div>
        </div>
      </form>
    )
  }
}

SearchBox.propTypes = {
  action: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  startValue: PropTypes.string,
  title: PropTypes.string.isRequired
}

SearchBox.defaultProps = {
  startValue: ''
}
