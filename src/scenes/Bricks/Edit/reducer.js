// Utils
import { fromJS } from 'immutable'

// Action
import { LOCATION_CHANGE } from 'react-router-redux'
import {
  UPDATE_FIELD,
  UPDATE_CHECKBOX
} from './constants'

export const initialState = fromJS({
  owner: {
    company_id: 'PD_123',
    email: 'j@ihk.io',
    name: 'Jonatan Santa Cruz',
    phone: '5554968900'
  },
  contact: {
    email: 'j@ihk.io',
    phone: '5534543345'
  },
  growth: {
    description: 'Definido por un lujo incomparable, es un proyecto extraordinario que...',
    external_key: '123',
    internal_key: '321',
    name: 'Vertiz 234'
  },
  location: {
    cp: '09360',
    direction: 'Dr Vertiz 234',
    latitude: '40.43243',
    longitude: '-23.432'
  },
  general: {
    alberca: {
      checked: true,
      label: 'Alberca'
    },
    escuelas_cercanas: {
      checked: false,
      label: 'Escuelas Cercanas'
    },
    jacuzzi: {
      checked: true,
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
    case UPDATE_FIELD:
      const { name, group, value } = action
      return state.merge(fromJS({
        [group]: {
          ..._state[group],
          [name]: value
        }
      }))
    case UPDATE_CHECKBOX:
      const { checked } = action
      return state.merge(fromJS({
        general: {
          ..._state.general,
          [action.name]: {
            ..._state.general[action.name],
            checked
          }
        }
      }))
    case LOCATION_CHANGE:
      return initialState
    default:
      return state
  }
}
