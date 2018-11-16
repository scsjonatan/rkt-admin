// Utils
import { fromJS } from 'immutable'

// Action
import {
  SET_USER_DATA,
  UPDATE_FORM_FIELD,
  TOGGLE_MODAL,
  RESET_FORM,
  START_SEARCH
} from './constants'

export const initialState = fromJS({
  isLoading: false,
  isSearched: false,
  showModal: false,
  form: {
    coins: '',
    action: null
  },
  user: {}
})

/**
  * reducer of Pandas Order Detail Scene
  * @param {object} state of reducer
  * @param {object} action to dispatch
  * @returns {object} next state
*/
export default function reducer(state = initialState, action) {
  const _state = state.toJS()
  switch (action.type) {
    case TOGGLE_MODAL:
      return state.set('showModal', action.status)
    case UPDATE_FORM_FIELD:
      const { field, value } = action
      return state.set('form', fromJS({
        ..._state.form,
        [field]: value
      }))
    case RESET_FORM:
      return initialState
    case SET_USER_DATA:
      return state.merge(fromJS({
        isLoading: false,
        user: action.user
      }))
    case START_SEARCH:
      return state.merge(fromJS({
        isLoading: true,
        isSearched: true
      }))
    default:
      return state
  }
}
