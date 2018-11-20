// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'
import { setBackgroundImage } from 'utils/data'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import Menu from './Menu'

// Styles
import './styles.scss'

class Item extends BaseComponent {
  render() {
    const {
      baths,
      brickId,
      field,
      image,
      name,
      parking,
      price,
      rooms,
      surface,
      type,
      t,
      status
    } = this.props
    const statusClass = status === 'deleted' ? 'Deleted' : ''
    return (
      <div className="UnitsListItem">
        <div className="UnitsListItem__MainData">
          <div
            className="UnitsListItem__MainData__Image"
            style={setBackgroundImage(image)}
          />
          <div className="UnitsListItem__MainData__Data">
            <p className="UnitsListItem__MainData__Data__Name">
              <span className={statusClass} />
              {name}
            </p>
            <p>{`${t('From')} ${price} MXN`}</p>
          </div>
        </div>
        <div className="UnitsListItem__MetaData">
          <div className="UnitsListItem__MetaData__List">
            <p>
              {t('Type')}: <span>{type}</span>
            </p>
            <p>
              {t('Rooms')}: <span>{rooms}</span>
            </p>
            <p>
              {t('Baths')}: <span>{baths}</span>
            </p>
          </div>
          <div className="UnitsListItem__MetaData__List">
            <p>
              {t('Parking')}: <span>{parking}</span>
            </p>
            <p>
              {t('Surface')}: <span>{`${surface}m2`}</span>
            </p>
            <p>
              {t('Field')}: <span>{`${field}m2`}</span>
            </p>
          </div>
          <Menu {...this.props} brickId={brickId} />
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

export default withNamespaces()(Item)
