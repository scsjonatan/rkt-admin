// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'
import { setBackgroundImage } from 'utils/data'

// Components
import Menu from './Menu'

// Styles
import './styles.scss'

export default class Item extends BaseComponent {
  render() {
    const {
      id,
      baths,
      brickId,
      field,
      image,
      name,
      parking,
      price,
      rooms,
      surface,
      type
    } = this.props
    return (
      <div className="UnitsListItem">
        <div className="UnitsListItem__MainData">
          <div
            className="UnitsListItem__MainData__Image"
            style={setBackgroundImage(image)}
          />
          <div className="UnitsListItem__MainData__Data">
            <p className="UnitsListItem__MainData__Data__Name">
              <span />
              {name}
            </p>
            <p>{`Desde ${price} MXN`}</p>
          </div>
        </div>
        <div className="UnitsListItem__MetaData">
          <div className="UnitsListItem__MetaData__List">
            <p>
              Tipo: <span>{type}</span>
            </p>
            <p>
              Habitaciones: <span>{rooms}</span>
            </p>
            <p>
              Baños: <span>{baths}</span>
            </p>
          </div>
          <div className="UnitsListItem__MetaData__List">
            <p>
              Estacionamiento: <span>{parking}</span>
            </p>
            <p>
              Superficie: <span>{`${surface}m2`}</span>
            </p>
            <p>
              Terreno: <span>{`${field}m2`}</span>
            </p>
          </div>
          <Menu unitId={id} brickId={brickId} />
        </div>
      </div>
    )
  }
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  brickId: PropTypes.string.isRequired,
  baths: PropTypes.number.isRequired,
  field: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  parking: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  rooms: PropTypes.number.isRequired,
  surface: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
}
