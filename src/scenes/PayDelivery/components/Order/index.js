// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'
import { setBackgroundImage } from 'utils/data'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import Column from './Column'

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

    const columnA = [
      { field: t('Order'), value: id, focus: true },
      { field: t('Created'), value: created },
      { field: t('Carrier'), value: carrier },
      { field: t('Last update'), value: last_update }
    ]
    const columnB = [
      { field: t('Ad id'), value: ad_id, focus: true },
      { field: t('Conekta id'), value: conekta_id },
      { field: t('Seller'), value: seller },
      { field: t('Buyer'), value: buyer },
      { field: t('Buyer phone'), value: phone }
    ]

    return (
      <div className={`PayDeliveryListItem ${detailClass}`} onClick={onClick}>
        <div className="PayDeliveryListItem__Image">
          <div
            className="PayDeliveryListItem__Image__Element"
            style={setBackgroundImage('https://picsum.photos/75/75')}
          />
        </div>
        <div className="PayDeliveryListItem__Data">
          <Column items={columnA} />
          <Column items={columnB} />
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

Order.contextTypes = { router: PropTypes.object.isRequired }

const mapDispatchToProps = dispatch => {
  return { setOrder: data => dispatch(setOrderDetail(data)) }
}

export default withNamespaces()(
  connect(
    null,
    mapDispatchToProps
  )(Order)
)
