// Utils
import { fromJS } from 'immutable'

// Action
import { FETCH_UNITS, CHANGE_TAB } from './constants'

export const initialState = fromJS({
  units: [],
  isLoading: true,
  filter: 'all'
})

/**
 * reducer of Units Detail Scene
 * @param {object} state of reducer
 * @param {object} action to dispatch
 * @returns {object} next state
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_UNITS:
      const { units } = action
      return state.merge({
        units,
        isLoading: false
      })
    case CHANGE_TAB:
      return state.set('filter', action.tab)
    default:
      return state
  }
}
