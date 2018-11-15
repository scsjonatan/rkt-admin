// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Owner from './components/Owner'
import Contact from './components/Contact'
import Growth from './components/Growth'
import Location from './components/Location'
import Images from './components/Images'
import Brochure from './components/Brochure'
import General from './components/General'

import Button from 'components/atoms/Button'

// Actions
import { fetchBrickData } from './actions'

// Styles
import './styles.scss'

class BricksForm extends BaseComponent {
  constructor() {
    super()

    this._bind('_handleSave')
  }

  componentDidMount() {
    if (this.props.isEdit) {
      this._fetchData()
    }
  }

  // Fake Fetch data
  _fetchData() {
    this.props.fetchData({
      owner: {
        company_id: 'PD_123',
        email: 'j@ihk.io',
        name: 'Jonatan Santa Cruz',
        phone: '5554968900'
      },
      contact: {
        email: 'j@ihk.io',
        phone: '5534543345'
      },
      growth: {
        description: 'Definido por un lujo incomparable, es un proyecto extraordinario que...',
        external_key: '123',
        internal_key: '321',
        name: 'Vertiz 234'
      },
      location: {
        cp: '09360',
        direction: 'Dr Vertiz 234',
        latitude: '40.43243',
        longitude: '-23.432'
      },
      general: {
        alberca: {
          checked: true,
          label: 'Alberca'
        },
        escuelas_cercanas: {
          checked: false,
          label: 'Escuelas Cercanas'
        },
        jacuzzi: {
          checked: true,
          label: 'Jacuzzi'
        }
      }
    })
  }

  _handleSave(e) {
    e.preventDefault()
    if (this.props.isEdit) {
      console.log('Editado')
    } else {
      console.log('Guardar Nuevo')
    }
  }

  render() {
    return (
      <div className="BricksForm">
        <Owner />
        <Contact />
        <Growth />
        <Location />
        <Images />
        <Brochure />
        <General />
        <div className="BricksForm__Controls">
          <div className="BricksForm__Controls__Save">
            <Button
              action={this._handleSave}
              label="Guardar y Continuar"
            />
          </div>
        </div>
      </div>
    )
  }
}

const dispatchStateToProps = dispatch => {
  return {
    fetchData: (data) => dispatch(fetchBrickData(data))
  }
}

export default connect(null, dispatchStateToProps)(BricksForm)
