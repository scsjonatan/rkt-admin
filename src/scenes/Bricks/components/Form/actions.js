import { UPDATE_FIELD, UPDATE_CHECKBOX, FETCH_BRICK_DATA } from './constants'

export const fetchBrickData = data => {
  return {
    type: FETCH_BRICK_DATA,
    data
  }
}

export const updateFieldByName = (name, value, group) => {
  return {
    type: UPDATE_FIELD,
    name,
    value,
    group
  }
}

export const updateCheckboxByName = (name, checked) => {
  return {
    type: UPDATE_CHECKBOX,
    name,
    checked
  }
}
