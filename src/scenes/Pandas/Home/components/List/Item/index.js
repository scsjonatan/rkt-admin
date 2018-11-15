// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'
import { setBackgroundImage } from 'utils/data'

// Routes
import { reverse } from 'routes'

// Components
import { Link } from 'react-router-dom'

// Styles
import './styles.scss'

export default class Item extends BaseComponent {
  render() {
    return (
      <Link className="PandasListItem" to={reverse('pandas:order')}>
        <div className="PandasListItem__Content">
          <div className="PandasListItem__Content__Image">
            <div
              className="PandasListItem__Content__Image__Element"
              style={setBackgroundImage('https://picsum.photos/200/300')}
            />
          </div>
          <div className="PandasListItem__Content__Data">
            <div className="PandasListItem__Content__Data__Column">
              <p className="PandasListItem__Content__Data__Column__Focus">
                Orden: <span>181124400005405</span>
              </p>
              <p>
                Creada: <span>9 Noviembre 2018 12:40</span>
              </p>
              <p>
                Carrier: <span>ups (1ZA9T9200480374)</span>
              </p>
              <p>
                Último cambio: <span>9 noviembre 2018 12:40</span>
              </p>
            </div>
            <div className="PandasListItem__Content__Data__Column">
              <p className="PandasListItem__Content__Data__Column__Focus">
                Ad ID: <span>43242314</span>
              </p>
              <p>
                Conekta ID: <span>9 Noviembre 2018 12:40</span>
              </p>
              <p>
                Vendedor: <span>mascalso_"3@hotmail.com</span>
              </p>
              <p>
                Comprados: <span>lorenamc.qweryty@gmail.com</span>
              </p>
              <p>
                Teléfono del comprador: <span>5554968900</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
