// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'
import { setBackgroundImage } from 'utils/data'

// Internalization
import { withNamespaces } from 'react-i18next'

// Routes
import { reverse } from 'routes'

// Actions
import { setOrderDetail } from 'scenes/PayDelivery/Order/redux/actions'

// Styles
import './styles.scss'

class Order extends BaseComponent {
  constructor() {
    super()

    this._bind('_handleClick')
  }

  _handleClick() {
    this.props.setOrder(this.props)
    const path = reverse('payDelivery:order', { id: this.props.id })
    this.context.router.history.push(path)
  }

  render() {
    const {
      ad_id,
      buyer,
      carrier,
      conekta_id,
      created,
      id,
      last_update,
      phone,
      seller,
      isDetail,
      t
    } = this.props
    const onClick = isDetail ? () => {} : this._handleClick
    const detailClass = isDetail ? '' : 'Pointer'
    return (
      <div className={`PayDeliveryListItem ${detailClass}`} onClick={onClick}>
        <div className="PayDeliveryListItem__Image">
          <div
            className="PayDeliveryListItem__Image__Element"
            style={setBackgroundImage('https://picsum.photos/75/75')}
          />
        </div>
        <div className="PayDeliveryListItem__Data">
          <div className="PayDeliveryListItem__Data__Column">
            <p className="PayDeliveryListItem__Data__Column__Focus">
              {t('Order')}: <span>{id}</span>
            </p>
            <p>
              {t('Created')}: <span>{created}</span>
            </p>
            <p>
              {t('Carrier')}: <span>{carrier}</span>
            </p>
            <p>
              {t('Last update')}: <span>{last_update}</span>
            </p>
          </div>
          <div className="PayDeliveryListItem__Data__Column">
            <p className="PayDeliveryListItem__Data__Column__Focus">
              {t('Ad id')}: <span>{ad_id}</span>
            </p>
            <p>
              {t('Conekta id')}: <span>{conekta_id}</span>
            </p>
            <p>
              {t('Seller')}: <span>{seller}</span>
            </p>
            <p>
              {t('Buyer')}: <span>{buyer}</span>
            </p>
            <p>
              {t('Buyer phone')}: <span>{phone}</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

Order.propTypes = {
  ad_id: PropTypes.string.isRequired,
  buyer: PropTypes.string.isRequired,
  carrier: PropTypes.string.isRequired,
  conekta_id: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  last_update: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  seller: PropTypes.string.isRequired
}

Order.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    setOrder: data => dispatch(setOrderDetail(data))
  }
}

export default withNamespaces()(
  connect(
    null,
    mapDispatchToProps
  )(Order)
)
