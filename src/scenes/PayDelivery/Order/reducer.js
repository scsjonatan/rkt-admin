// Utils
import { fromJS } from 'immutable'

// Action
import { SET_ORDER } from './constants'

export const initialState = fromJS({
  order: {
    ad_id: '',
    buyer: '',
    carrier: '',
    conekta_id: '',
    created: '',
    id: '',
    last_update: '',
    phone: '',
    seller: ''
  }
})

/**
 * reducer of PayDelivery Order Detail Scene
 * @param {object} state of reducer
 * @param {object} action to dispatch
 * @returns {object} next state
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORDER:
      return state.merge(fromJS({ order: action.data }))
    default:
      return state
  }
}
