// Utils
import { fromJS } from 'immutable'

// Action
import { LOCATION_CHANGE } from 'react-router-redux'

export const initialState = fromJS({
  owner: {
    name: 'Jonatan Santa Cruz',
    company_id: 'PD_123',
    email: 'j@ihk.io',
    phone: '5554968900'
  },
  contact: {
    email: 'j@ihk.io',
    phone: '5534543345'
  },
  growth: {
    name: 'Vertiz 234',
    description: 'Definido por un lujo incomparable, es un proyecto extraordinario que...',
    internal_key: '321',
    external_key: '123'
  },
  location: {
    direction: 'Dr Vertiz 234',
    cp: '09360',
    latitude: '40.43243',
    longitude: '-23.432'
  },
  general: {
    alberca: {
      label: 'Alberca',
      checked: true
    },
    escuelas_cercanas: {
      label: 'Escuelas Cercanas',
      checked: false
    },
    jacuzzi: {
      label: 'Jacuzzi',
      checked: true
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
  switch (action.type) {
    case LOCATION_CHANGE:
      return initialState
    default:
      return state
  }
}
