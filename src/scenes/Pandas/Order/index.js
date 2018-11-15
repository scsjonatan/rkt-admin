// Dependencies
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Components
import Header from 'components/views/Header'
import PandasOrder from 'scenes/Pandas/components/Order'

// Utils
import BaseComponent from 'utils/BaseComponent'
import { setOrderDetail } from 'scenes/Pandas/Order/actions'


// Styles
import './styles.scss'

class Order extends BaseComponent {
  constructor() {
    super()
    this._bind('_fetchDataById')
  }
  componentDidMount() {
    const order = this.props.order.toJS()
    if (!order.id) {
      this._fetchDataById()
    }
  }

  _fetchDataById() {
    // Simulate Get data with url id param
    console.log(this.context.router.route.match.params.id)
    this.props.setOrder({
      ad_id: '43242314',
      buyer: 'lorenamc.qweryty@gmail.com',
      carrier: 'ups (1ZA9T9200480374)',
      conekta_id: '653465346345634',
      created: '9 Noviembre 2018 12:40',
      id: '181124400005405',
      last_update: '9 noviembre 2018 12:40',
      phone: '5554968900',
      seller: 'mascalso_3@hotmail.com'
    })
  }

  render() {
    return (
      <div className="PandasOrderDetail">
        <Header title="Secadora Conair" />
        <div className="PandasOrderDetail__Content">
          <PandasOrder isDetail {...this.props.order.toJS()} />
          <div className="PandasOrderDetail__Content__History">
            <p className="PandasOrderDetail__Content__History__Title">
              Historial de la orden
            </p>
            <div className="PandasOrderDetail__Content__History__Content">
              <ul>
                <li>
                  <p>New</p>
                  <span>9 noviembre 2018 12:40</span>
                </li>
                <li>
                  <p>Preauthorized</p>
                  <span>9 noviembre 2018 12:40</span>
                </li>
                <li>
                  <p>Pending PickUp</p>
                  <span>9 noviembre 2018 12:40</span>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Order.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    order: state.scenePandasOrder.get('order')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setOrder: (data) => dispatch(setOrderDetail(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
