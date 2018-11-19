// Dependencies
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import Header from 'components/views/Header'
import PayDeliveryOrder from 'scenes/PayDelivery/components/Order'
import History from './History'
import { ClipLoader } from 'react-spinners'

// Utils
import BaseComponent from 'utils/BaseComponent'
import { setOrderDetail } from 'scenes/PayDelivery/Order/redux/actions'

// Services
import { fetchOrderById, fetchOrderHistoryById } from 'services/orders'

// Styles
import './styles.scss'

class Order extends BaseComponent {
  constructor(props) {
    super(props)
    const order = props.order.toJS()
    this.state = {
      isLoading: !order.id,
      history: []
    }

    this._bind('_fetchDataById', '_renderContent')
  }
  componentDidMount() {
    const order = this.props.order.toJS()
    if (!order.id) {
      this._fetchDataById()
    }
  }

  _fetchDataById() {
    // Simulate Get data with url id param
    const id = this.context.router.route.match.params.id
    fetchOrderById(id).then(order => {
      this.props.setOrder(order)
      fetchOrderHistoryById(id).then(history => {
        this.setState({
          history,
          isLoading: false
        })
      })
    })
  }

  _renderContent() {
    const { t } = this.props
    const order = this.props.order.toJS()
    return this.state.isLoading ? (
      <div className="PayDeliveryOrderDetail__Content">
        <ClipLoader color="#1d72db" />
      </div>
    ) : (
      <div className="PayDeliveryOrderDetail__Content">
        <PayDeliveryOrder isDetail {...order} />
        <div className="PayDeliveryOrderDetail__Content__History">
          <p className="PayDeliveryOrderDetail__Content__History__Title">
            {t('Order History')}
          </p>
          <History history={this.state.history} />
        </div>
      </div>
    )
  }

  render() {
    const order = this.props.order.toJS()
    return (
      <div className="PayDeliveryOrderDetail">
        <Header title={order.name} />
        {this._renderContent()}
      </div>
    )
  }
}

Order.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    order: state.scenePayDeliveryOrder.get('order')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setOrder: data => dispatch(setOrderDetail(data))
  }
}

export default withNamespaces()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Order)
)
