// Utils
import { fromJS } from 'immutable'

// Action
import { LOCATION_CHANGE } from 'react-router-redux'
import { UPDATE_FIELD, UPDATE_CHECKBOX, FETCH_BRICK_DATA } from './constants'

export const initialState = fromJS({
  owner: {
    company_id: '',
    email: '',
    name: '',
    phone: ''
  },
  contact: {
    email: '',
    phone: ''
  },
  growth: {
    description: '',
    external_key: '',
    internal_key: '',
    name: ''
  },
  location: {
    cp: '',
    direction: '',
    latitude: '',
    longitude: ''
  },
  general: {
    alberca: {
      checked: false,
      label: 'Alberca'
    },
    escuelas_cercanas: {
      checked: false,
      label: 'Escuelas Cercanas'
    },
    jacuzzi: {
      checked: false,
      label: 'Jacuzzi'
    }
  }
})

/**
 * reducer of Bricks Edit Scene
 * @param {object} state of reducer
 * @param {object} action to dispatch
 * @returns {object} next state
 */
export default function reducer(state = initialState, action) {
  const _state = state.toJS()
  switch (action.type) {
    case FETCH_BRICK_DATA:
      return state.merge(fromJS({ ...action.data }))
    case UPDATE_FIELD:
      const { name, group, value } = action
      return state.merge(
        fromJS({
          [group]: {
            ..._state[group],
            [name]: value
          }
        })
      )
    case UPDATE_CHECKBOX:
      const { checked } = action
      return state.merge(
        fromJS({
          general: {
            ..._state.general,
            [action.name]: {
              ..._state.general[action.name],
              checked
            }
          }
        })
      )
    case LOCATION_CHANGE:
      return initialState
    default:
      return state
  }
}
