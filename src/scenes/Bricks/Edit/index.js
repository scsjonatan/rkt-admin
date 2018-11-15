// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Header from 'components/views/Header'

import Owner from './components/Owner'
import Contact from './components/Contact'
import Growth from './components/Growth'
import Location from './components/Location'
import Images from './components/Images'
import Brochure from './components/Brochure'
import General from './components/General'

// Styles
import './styles.scss'

export default class CreateBrick extends BaseComponent {
  constructor() {
    super()

    this.state = {
      owner: {
        name: 'Jonatan Santa Cruz',
        company_id: 'PD_123',
        email: 'j@ihk.io',
        phone: '5554968900'
      },
      contact: {
        email: 'j@ihk.io',
        phone: '5534543345'
      },
      growth: {
        name: 'Vertiz 234',
        description: 'Definido por un lujo incomparable, es un proyecto extraordinario que...',
        internal_key: '321',
        external_key: '123'
      },
      location: {
        direction: 'Dr Vertiz 234',
        cp: '09360',
        latitude: '40.43243',
        longitude: '-23.432'
      },
      general: {
        alberca: {
          label: 'Alberca',
          checked: true
        },
        escuelas_cercanas: {
          label: 'Escuelas Cercanas',
          checked: false
        },
        jacuzzi: {
          label: 'Jacuzzi',
          checked: true
        }
      }
    }

    this._bind('_handleGeneralCheck')
  }

  _handleGeneralCheck(name, checked) {
    this.setState(prevState => {
      return {
        general: {
          ...prevState.general,
          [name]: {
            ...prevState.general[name],
            checked
          }
        }
      }
    })
  }

  render() {
    return (
      <div className="SceneBricksCreate">
        <Header title="Editar desarrollo" />
        <div className="SceneBricksCreate__Content">
          <div className="SceneBricksCreate__Content__Field">
            <Owner {...this.state.owner} />
            <Contact {...this.state.contact} />
            <Growth {...this.state.growth} />
            <Location {...this.state.location} />
            <Images />
            <Brochure />
            <General
              fields={this.state.general}
              handleCheckboxChange={this._handleGeneralCheck}
            />
          </div>
        </div>
      </div>
    )
  }
}
