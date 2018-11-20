// Constants
import { FETCH_UNITS, CHANGE_TAB } from './constants'

// Services
import { fetchUnitsByBrickId } from 'services/units'

export const updateUnits = units => {
  return {
    type: FETCH_UNITS,
    units
  }
}

export const fetchUnits = (id, dispatch) => {
  return fetchUnitsByBrickId(id).then(units => {
    dispatch(updateUnits(units))
  })
}

export const changeTab = tab => {
  return {
    type: CHANGE_TAB,
    tab
  }
}
