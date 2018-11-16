// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'
import { setBackgroundImage } from 'utils/data'

export default class Image extends BaseComponent {
  constructor() {
    super()

    this.state = {
      src: ''
    }

    this._bind('_deleteImage')
  }

  componentDidMount() {
    let reader = new FileReader()
    reader.onload = e => {
      this.setState({
        src: e.target.result
      })
    }
    reader.readAsDataURL(this.props.image)
  }

  _deleteImage() {
    this.props.deleteImage(this.props.image)
  }

  render() {
    return (
      <div className="FormImages__List__Add__Element">
        <div
          className="FormImages__List__Add__Element__Image"
          style={setBackgroundImage(this.state.src)}
        />
        <div
          className="FormImages__List__Add__Element__Delete"
          onClick={this._deleteImage}
        >
          x
        </div>
      </div>
    )
  }
}
