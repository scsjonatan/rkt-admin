// Utils
import { fromJS } from 'immutable'

// Constants
import { UPDATE_FIELD, SET_UNIT_DATA } from './constants'

export const initialState = fromJS({
  title: '',
  model: '',
  price: '',
  build_surface: '',
  field_surface: '',
  description: '',
  id: ''
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
    case SET_UNIT_DATA:
      return fromJS({
        title: action.data.title,
        model: action.data.model,
        price: action.data.price,
        build_surface: action.data.build_surface,
        field_surface: action.data.field_surface,
        description: action.data.description,
        id: action.data.id
      })
    default:
      return state
  }
}
