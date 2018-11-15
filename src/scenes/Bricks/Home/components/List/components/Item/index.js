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
                Guillermo Prieto 40
              </p>
              <p>Desde $3,000,000 MXN</p>
            </div>
          </div>
          <div className="BricksListItem__MainData__Units">
            <p>24 Unidades</p>
          </div>
        </div>
        <div className="BricksListItem__MetaData">
          <div className="BricksListItem__MetaData__List">
            <p className="BricksListItem__MetaData__List__Focus">
              Email: <span>hola@puntodestino.com</span>
            </p>
            <p>
              Categoría: <span>Desarrollos inmobiliarios</span>
            </p>
            <p>
              Fecha de creación: <span>04 Abr 2018 13:45</span>
            </p>
            <p>
              ID de Anuncio: <span>364382747983</span>
            </p>
            <p>
              Teléfono: <span>55 54968900</span>
            </p>
            <p className="BricksListItem__MetaData__List__Focus">
              <span>Historial</span>
            </p>
          </div>
          <Menu />
        </div>
      </div>
    )
  }
}
