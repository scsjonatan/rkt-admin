// Constants
import { FETCH_ORDERS, CHANGE_TAB } from './constants'

// Services
import { fetchOrdersBySearch } from 'services/orders'

export const updateOrders = (orders, filter, search) => {
  return {
    type: FETCH_ORDERS,
    orders,
    filter,
    search
  }
}

export const fetchOrdersByFilterSearch = (filter, search, dispatch) => {
  return fetchOrdersBySearch(search).then(orders => {
    dispatch(updateOrders(orders, filter, search))
  })
}

export const changeTab = tab => {
  return {
    type: CHANGE_TAB,
    tab
  }
}
