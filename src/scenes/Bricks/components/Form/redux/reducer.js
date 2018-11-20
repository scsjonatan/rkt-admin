// Utils
import { fromJS } from 'immutable'

// Action
import { UPDATE_FIELD, UPDATE_CHECKBOX, FETCH_BRICK_DATA } from './constants'
import { LOCATION_CHANGE } from 'react-router-redux'

export const initialState = fromJS({
  id: null,
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
  development: {
    description: '',
    external_key: '',
    internal_key: '',
    name: '',
    phase: '',
    unit_type: '',
    delivery: '',
    year: ''
  },
  location: {
    cp: '',
    address: '',
    latitude: '',
    longitude: '',
    state: '',
    municipality: '',
    area: '',
    restriction: null
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
 * reducer of Bricks Form
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
