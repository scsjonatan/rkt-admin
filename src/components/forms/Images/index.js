// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'
import uuid from 'utils/uuid'

// Components
import Image from './Image'
import ImageUploader from 'react-images-upload'

// Styles
import './styles.scss'

export default class Images extends BaseComponent {
  constructor() {
    super()

    this.state = {
      images: []
    }

    this._bind('_addImage', '_renderAddImage', '_handleDelete', '_renderImage')
  }

  _handleDelete(image) {
    const _images = this.state.images
    const indexOfImage = _images.indexOf(image)
    _images.splice(indexOfImage, 1)
    this.setState({
      images: _images
    })
  }

  _renderImage(image) {
    return <Image key={uuid()} image={image} deleteImage={this._handleDelete} />
  }

  _renderTitle() {
    const { title } = this.props
    return title ? <p className="FormImages__Title">{title}</p> : null
  }

  _renderAddImage() {
    const { images } = this.state
    const { limit } = this.props

    const shouldRender = limit > images.length
    return shouldRender ? (
      <ImageUploader
        buttonText="+"
        className="FormImages__List__Add"
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880}
        onChange={this._addImage}
        singleImage={true}
        withIcon={false}
        withLabel={false}
      />
    ) : null
  }

  _addImage(images) {
    this.setState({ images })
  }

  render() {
    return (
      <div className="FormImages">
        {this._renderTitle()}
        <div className="FormImages__List">
          {this.state.images.map(this._renderImage)}
          {this._renderAddImage()}
        </div>
      </div>
    )
  }
}

Images.propTypes = {
  limit: PropTypes.number,
  title: PropTypes.string
}

Images.defaultProps = {
  limit: 99999,
  title: ''
}
