// Utils
import { fromJS } from 'immutable'

// Constants
import { UPDATE_FIELD } from './constants'
import { LOCATION_CHANGE } from 'react-router-redux'

export const initialState = fromJS({
  title: '',
  model: '',
  price: '',
  build_surface: '',
  field_surface: '',
  description: ''
})

/**
 * reducer of Units Edit Scene
 * @param {object} state of reducer
 * @param {object} action to dispatch
 * @returns {object} next state
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FIELD:
      const { name, value } = action
      return state.set(name, value)
    case LOCATION_CHANGE:
      return initialState
    default:
      return state
  }
}
