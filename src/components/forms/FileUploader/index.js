// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Button from 'components/atoms/Button'

// Styles
import './styles.scss'

export default class FileUploader extends BaseComponent {
  constructor() {
    super()

    this.state = {
      name: ''
    }
    this.fileUpload = React.createRef()
    this._bind('_handleUpload', '_handleFile')
  }

  _handleUpload(e) {
    e.preventDefault()
    this.fileUpload.current.click()
  }

  _renderTitle() {
    const { title } = this.props
    return title ? <p className="FileUploader__Title">{title}</p> : null
  }

  _handleFile(e) {
    const file = e.target.files[0]
    this.props.onChange(file)
    this.setState({
      name: file.name
    })
  }

  render() {
    const { className, disabled, name } = this.props
    return (
      <div className={`FileUploader ${className}`}>
        {this._renderTitle()}
        <div className="FileUploader__Button">
          <Button action={this._handleUpload} label="Subir Archivo" />
          <p className="FileUploader__Name">{this.state.name}</p>
        </div>
        <input
          accept="application/pdf"
          disabled={disabled}
          name={name}
          onChange={this._handleFile}
          ref={this.fileUpload}
          type="file"
        />
      </div>
    )
  }
}

FileUploader.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  title: PropTypes.string
}

FileUploader.defaultProps = {
  className: '',
  disabled: false,
  onChange: () => {},
  title: ''
}
