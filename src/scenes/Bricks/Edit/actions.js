import { UPDATE_FIELD, UPDATE_CHECKBOX } from './constants'


export const updateFieldByName = (name, value, group) => {
  return {
    type: UPDATE_FIELD,
    name, value, group
  }
}

export const updateCheckboxByName = (name, checked) => {
  return {
    type: UPDATE_CHECKBOX,
    name, checked
  }
}
