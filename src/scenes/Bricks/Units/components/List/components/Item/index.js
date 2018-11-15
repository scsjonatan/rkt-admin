// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'
import { setBackgroundImage } from 'utils/data'

// Components
import Menu from './Menu'

// Styles
import './styles.scss'

export default class Item extends BaseComponent {
  render() {
    return (
      <div className="UnitsListItem">
        <div className="UnitsListItem__MainData">
          <div
            className="UnitsListItem__MainData__Image"
            style={setBackgroundImage('https://picsum.photos/200/300')}
          />
          <div className="UnitsListItem__MainData__Data">
            <p className="UnitsListItem__MainData__Data__Name">
              <span />
              Modelo A
            </p>
            <p>Desde $3,000,000 MXN</p>
          </div>
        </div>
        <div className="UnitsListItem__MetaData">
          <div className="UnitsListItem__MetaData__List">
            <p>
              Tipo: <span>Departamento</span>
            </p>
            <p>
              Habitaciones: <span>2</span>
            </p>
            <p>
              Baños: <span>1</span>
            </p>
          </div>
          <div className="UnitsListItem__MetaData__List">
            <p>
              Estacionamiento: <span>1</span>
            </p>
            <p>
              Superficie: <span>98m2</span>
            </p>
            <p>
              Terreno: <span>120m2</span>
            </p>
          </div>
          <Menu />
        </div>
      </div>
    )
  }
}
