// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import Nav from 'components/lists/Nav'
import Item from './Item'

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
          {this.props.bricks.map(this._renderBricks)}
        </div>
      </div>
    )
  }
}

List.propTypes = {
  bricks: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default withNamespaces()(List)
