// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Internalization
import { withNamespaces } from 'react-i18next'

// Utils
import BaseComponent from 'utils/BaseComponent'
import { setBackgroundImage } from 'utils/data'

// Components
import Menu from './Menu'

// Styles
import './styles.scss'

class Item extends BaseComponent {
  render() {
    const {
      ad_id,
      category,
      created,
      email,
      name,
      phone,
      price,
      units,
      status,
      t
    } = this.props
    const statusClass = status === 'deleted' ? 'Deleted' : ''
    return (
      <div className="BricksListItem">
        <div className="BricksListItem__MainData">
          <div className="BricksListItem__MainData__Brick">
            <div
              className="BricksListItem__MainData__Brick__Image"
              style={setBackgroundImage('https://picsum.photos/75/75')}
            />
            <div className="BricksListItem__MainData__Brick__Data">
              <p className="BricksListItem__MainData__Brick__Data__Name">
                <span className={statusClass} />
                {name}
              </p>
              <p>{`Desde ${price}`}</p>
            </div>
          </div>
          <div className="BricksListItem__MainData__Units">
            <p>{`${units} ${t('Units')}`}</p>
          </div>
        </div>
        <div className="BricksListItem__MetaData">
          <div className="BricksListItem__MetaData__List">
            <p className="BricksListItem__MetaData__List__Focus">
              {t('Email')}: <span>{email}</span>
            </p>
            <p>
              {t('Category')}: <span>{category}</span>
            </p>
            <p>
              {t('Created at')}: <span>{created}</span>
            </p>
            <p>
              {t('Ad id')}: <span>{ad_id}</span>
            </p>
            <p>
              {t('Phone')}: <span>{phone}</span>
            </p>
            <p className="BricksListItem__MetaData__List__Focus">
              <span>{t('Hostory')}</span>
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
  units: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired
}

export default withNamespaces()(Item)
