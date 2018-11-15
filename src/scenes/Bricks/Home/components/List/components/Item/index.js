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
      ad_id,
      category,
      created,
      email,
      name,
      phone,
      price,
      units
    } = this.props

    return (
      <div className="BricksListItem">
        <div className="BricksListItem__MainData">
          <div className="BricksListItem__MainData__Brick">
            <div
              className="BricksListItem__MainData__Brick__Image"
              style={setBackgroundImage('https://picsum.photos/200/300')}
            />
            <div className="BricksListItem__MainData__Brick__Data">
              <p className="BricksListItem__MainData__Brick__Data__Name">
                <span />
                {name}
              </p>
              <p>{`Desde ${price}`}</p>
            </div>
          </div>
          <div className="BricksListItem__MainData__Units">
            <p>{`${units} Unidades`}</p>
          </div>
        </div>
        <div className="BricksListItem__MetaData">
          <div className="BricksListItem__MetaData__List">
            <p className="BricksListItem__MetaData__List__Focus">
              Email: <span>{email}</span>
            </p>
            <p>
              Categoría: <span>{category}</span>
            </p>
            <p>
              Fecha de creación: <span>{created}</span>
            </p>
            <p>
              ID de Anuncio: <span>{ad_id}</span>
            </p>
            <p>
              Teléfono: <span>{phone}</span>
            </p>
            <p className="BricksListItem__MetaData__List__Focus">
              <span>Historial</span>
            </p>
          </div>
          <Menu id={ad_id} />
        </div>
      </div>
    )
  }
}

Item.propTypes = {
  ad_id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  units: PropTypes.number.isRequired
}
