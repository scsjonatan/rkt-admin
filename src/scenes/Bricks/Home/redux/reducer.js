// Utils
import { fromJS } from 'immutable'

// Action
import { FETCH_BRICKS, CHANGE_TAB } from './constants'

export const initialState = fromJS({
  bricks: [],
  search: '',
  filter: 'all',
  isLoading: true
})

/**
 * reducer of Bricks Home Detail Scene
 * @param {object} state of reducer
 * @param {object} action to dispatch
 * @returns {object} next state
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BRICKS:
      const { filter, search, bricks } = action
      return state.merge({
        bricks,
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
