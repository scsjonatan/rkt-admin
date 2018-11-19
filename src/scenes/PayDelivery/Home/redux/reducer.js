// Utils
import { fromJS } from 'immutable'

// Action
import { FETCH_ORDERS, CHANGE_TAB } from './constants'

export const initialState = fromJS({
  orders: [],
  search: '',
  filter: 'all',
  isLoading: true
})

/**
 * reducer of payDelivery Home Detail Scene
 * @param {object} state of reducer
 * @param {object} action to dispatch
 * @returns {object} next state
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ORDERS:
      const { filter, search, orders } = action
      return state.merge({
        orders,
        search,
        filter,
        isLoading: false
      })
    case CHANGE_TAB:
      return state.set('filter', action.tab)
    default:
      return state
  }
}
