// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import Nav from 'components/lists/Nav'
import Item from './components/Item'

// Styles
import './styles.scss'

class List extends BaseComponent {
  constructor(props) {
    super(props)

    const { t } = props
    this.state = {
      tabs: [
        {
          label: t('All'),
          number: 0,
          slug_name: 'all'
        },
        {
          label: t('Publics'),
          number: 0,
          slug_name: 'public'
        },
        {
          label: t('Deleted'),
          number: 0,
          slug_name: 'deleted'
        }
      ],
      bricks: [
        {
          ad_id: '364382747983',
          category: 'Desarrollos inmobiliarios',
          created: '04 Abr 2018 13:45',
          email: 'hola@puntodestino.com',
          name: 'Guillermo Prieto 40',
          phone: '55 54968900',
          price: '$3,000,000 MXN',
          units: 24
        }
      ]
    }
  }

  _renderBricks(brick) {
    return <Item key={brick.ad_id} {...brick} />
  }

  render() {
    return (
      <div className="GeneralContainer BricksList">
        <Nav tabs={this.state.tabs} />
        <div className="BricksList__Content">
          {this.state.bricks.map(this._renderBricks)}
        </div>
      </div>
    )
  }
}

export default withNamespaces()(List)
