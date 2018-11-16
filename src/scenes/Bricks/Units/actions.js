import { UPDATE_FIELD, SET_UNIT_DATA } from './constants'

export const updateValueByField = (name, value) => {
  return {
    type: UPDATE_FIELD,
    name,
    value
  }
}

export const setCompleteUnitData = data => {
  return {
    type: SET_UNIT_DATA,
    data
  }
}
