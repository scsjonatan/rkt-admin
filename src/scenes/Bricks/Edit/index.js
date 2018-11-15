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

export default class EditBrick extends BaseComponent {
  render() {
    return (
      <div className="SceneBricksCreate">
        <Header title="Editar desarrollo" />
        <div className="SceneBricksCreate__Content">
          <div className="SceneBricksCreate__Content__Field">
            <Owner />
            <Contact />
            <Growth />
            <Location />
            <Images />
            <Brochure />
            <General />
          </div>
        </div>
      </div>
    )
  }
}
